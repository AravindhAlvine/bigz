/// <reference  types="@types/googlemaps"  />

import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GetCategoryListResponse } from '../../models/CategoryResponses';
import { HairStylistsService } from '../hair-stylists.service';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from 'ngx-intl-tel-input';
import { BusinessHours, SocialLinks, Vendor } from '../../models/Vendor';
import { ToastService } from '../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneNumber, PhoneNumberInput } from '../../models/PhoneNumber';
import { Location } from '../../models/Location';
import { NgForm } from '@angular/forms';
import { BUSINESS_HOURS, BUSINESS_DAYS, SOCIAL_LINKS } from '../../../assets/data/hairStylist';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Status } from '../../models/Status';

@Component({
  selector: 'app-create-hair-stylist',
  templateUrl: './create-hair-stylist.component.html',
  styleUrls: ['./create-hair-stylist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateHairStylistComponent implements OnInit, AfterViewInit {
  @ViewChild('categoryMenu') categoryMenu: OverlayPanel;
  @ViewChild('googleAutoCompleteAddress') googleAutoCompleteAddress: ElementRef;
  public showFirstStep: boolean = true;
  public showSecondStep: boolean = false;
  public showThirdStep: boolean = false;
  public businessHours: Array<string> = BUSINESS_HOURS;
  public businessDays: Array<BusinessHours> = BUSINESS_DAYS;
  public socialLinks: Array<SocialLinks> = SOCIAL_LINKS;
  public hairstylistData: Vendor = {} as Vendor;
  //public serviceData : CreateServiceRequest  = {} as CreateServiceRequest;
  categoryList: Array<GetCategoryListResponse>;
  filteredCategoryList: Array<GetCategoryListResponse>;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  logoToUpload: File;
  bannersToUpload: Array<File> = [];
  worksToUpload: Array<File> = [];
  documentsToUpload: Array<File> = [];
  uploadAssestsformData = new FormData();
  phoneNumber: PhoneNumberInput;
  selectedCategories = [];
  selectedSubCategories = [];
  location: Location = { type: 'Point' } as Location;
  isEditMode: boolean = false;
  currentVendorId: string;
  hairstylistForm: NgForm;
  displayBannerSlider: boolean;
  displayWorksSlider: boolean;
  bannerActiveIndex: number;
  worksActiveIndex: number;

  vendorStatus: Status = {
    name: 'active',
    display_name: 'Active'
  } as Status;

  vendorApprovalStatus: Status = {
    name: 'approved',
    display_name: 'Approved'
  } as Status;

  logoImgError: boolean = false;

  selectedTab: number = 1;


  constructor(
    private hairStylistsService: HairStylistsService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    public changeDetector: ChangeDetectorRef,){ }


  @HostListener('submit')

  onFormSubmit() {
    const invalidControl = this.el.nativeElement.getElementsByClassName('ng-invalid');
    if (invalidControl[1]) {
      invalidControl[1].focus();
    }
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  ngOnInit(): void {
    this.bannerActiveIndex = 0;
    this.worksActiveIndex = 0;
    this.getCategoryListAPICall();
    this.isUrlContainsEditId();
  }

  showNextStep(form) {
    if (form.valid)
      this.showFirstStep = false;
  }

  getCategoryListAPICall() {
    this.hairStylistsService.getCategoryList().subscribe(result => {
      this.categoryList = result.data;
      this.filteredCategoryList = result.data;
    })
  }

  getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.googleAutoCompleteAddress.nativeElement,
      {
        componentRestrictions: { country: 'US' },
        // fields: ["address_components", "geometry"],
        types: ['address']
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.fillInAddress(place)
    });
  }


  fillInAddress(place) {
    let streetAddress = "";
    let postcode = "";
    for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          streetAddress = `${component.long_name} ${streetAddress}`;
          break;
        }
        case "route": {
          streetAddress += component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          const cityElement = document.querySelector("#city") as HTMLInputElement
          cityElement.value = component.long_name;
          this.hairstylistData['city'] = component.long_name
          break;
        case "administrative_area_level_1": {
          (document.querySelector("#state") as HTMLInputElement).value = component.short_name;
          this.hairstylistData['state'] = component.short_name
          break;
        }
        case "country":
          (document.querySelector("#country") as HTMLInputElement).value = component.long_name;
          this.hairstylistData['country'] = component.long_name
          break;
      }
    }

    (document.querySelector("#street_address2") as HTMLInputElement).value = streetAddress;
    this.hairstylistData['street_address2'] = streetAddress;
    this.hairstylistData['zip_code'] = postcode;

    (document.querySelector("#street_address1") as HTMLInputElement).focus();
    this.location['coordinates'] = [place.geometry.location.lng(), place.geometry.location.lat()];
    this.hairstylistData['formatted_address'] = place.formatted_address;
  }

  logoChangeEvent(event, fileUpload) {
    const reader = new FileReader();
    reader.readAsDataURL(event.currentFiles[0]);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        if (width >= 612 && height >= 366) {
          this.logoImgError = false;
          this.logoToUpload = <File>event.currentFiles[0];
        } else {
          fileUpload.clear();
          this.logoImgError = true;
        }
      };
    };
  }

  uploadLogo() {
    this.uploadAssestsformData.append('logo', this.logoToUpload);
  }

  bannersChangeEvent(event) {
    // this.bannersToUpload = <Array<File>>fileInput.target.files;
    for (let file of event.currentFiles) {
      this.bannersToUpload.push(file);
    }
  }

  uploadBanners() {
    for (let banner of <Array<File>>this.bannersToUpload) {
      this.uploadAssestsformData.append("banners", banner);
    }
  }

  worksChangeEvent(event) {
    // this.worksToUpload = <Array<File>>fileInput.target.files;
    for (let file of event.currentFiles) {
      this.worksToUpload.push(file);
    }
  }

  uploadWorksGallery() {
    for (let work of this.worksToUpload) {
      this.uploadAssestsformData.append("works", work);
    }
  }

  documentsChangeEvent(fileInput: any) {
    this.documentsToUpload = <Array<File>>fileInput.target.files;
  }

  uploadDocuments() {
    for (let doc of this.documentsToUpload) {
      this.uploadAssestsformData.append("documents", doc);
    }
  }

  saveVendorDetails(form) {
    this.hairstylistForm = form;
    if (form.valid) {
      this.createVendorRequestBody();
      this.createVendorAPICall();
    }
  }

  createVendorRequestBody() {
    const phoneNumber: PhoneNumber = {
      country_code: this.phoneNumber.countryCode,
      dial_code: this.phoneNumber.dialCode,
      international_number: this.phoneNumber.internationalNumber,
      number: this.phoneNumber.number
    }
    this.hairstylistData['phone_number'] = phoneNumber;
    this.hairstylistData['business_hours'] = this.businessDays;
    this.hairstylistData['social_links'] = this.socialLinks;
    this.hairstylistData['categories'] = this.selectedCategories;
    this.hairstylistData['sub_categories'] = this.selectedSubCategories;
    this.hairstylistData['location'] = this.location;
    this.hairstylistData['status'] = this.vendorStatus;
    this.hairstylistData['approval_status'] = this.vendorApprovalStatus;
  }

  createVendorAPICall() {
    this.hairStylistsService.createVendor(this.hairstylistData).subscribe(result => {
      this.currentVendorId = result.data._id;
      // console.log('this.currentVendorId22222', this.currentVendorId)
      this.uploadAssets();
    })
  }

  uploadAssets() {
    this.uploadLogo();
    this.uploadBanners();
    this.uploadWorksGallery();
    this.uploadDocuments();
    //this.uploadAssestsformData.append('vendor_id', vendorId);
    this.uploadAssetsAPICall();
  }

  uploadAssetsAPICall() {
    this.hairStylistsService.uploadAssets(this.uploadAssestsformData, this.currentVendorId).subscribe(result => {
      if (this.isEditMode)
        this.toastService.showSuccessToast('Hairstylist details updated Successfully');
      else
        this.toastService.showSuccessToast('Hairstylist Created Successfully');
        this.hairstylistForm.resetForm();
    })
  }

  isUrlContainsEditId() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        // console.log('this.currentVendorId', params['id']);
        this.currentVendorId = params['id'];
        this.isEditMode = true;
        this.displayBannerSlider = true;
        this.displayWorksSlider = true;
        this.getVendorDetailsAPICall(params['id']);
      }
    })
  }

  getVendorDetailsAPICall(id) {
    this.hairStylistsService.getVendorDetails(id).subscribe(result => {
      // console.log('getVendorDetails', result)
      const data = result.data;
      this.hairstylistData = data;
      if (data.business_hours.length !== 0) {
        this.businessDays = data.business_hours;
      }
      if (data.social_links.length !== 0) {
        this.socialLinks = data.social_links;
      }
      this.phoneNumber = {
        countryCode: data.phone_number.country_code,
        dialCode: data.phone_number.dial_code,
        internationalNumber: data.phone_number.international_number,
        number: data.phone_number.number
      }

      var selectedStatus = data.status;
      console.log('selectedStatus', selectedStatus);

      this.location = data.location;
      this.populateCategories(data.categories);
      this.populateSubCategories(data.sub_categories);
      this.populateFilteredCategories(data.categories);
    })
  }

  populateCategories(categories) {
    this.categoryList.map(category => {
      categories.map(item => {
        if (category._id == item) {
          category['selected'] = true
          this.selectedCategories.push(category)
        }
      })
    })
  }

  populateFilteredCategories(categories) {
    this.filteredCategoryList.map(category => {
      categories.map(item => {
        if (category._id == item) {
          category['selected'] = true
        }
      })
    })
  }

  populateSubCategories(subCategories) {
    this.categoryList.map(category => {
      if (category.sub_categories.length !== 0) {
        category.sub_categories.map(subCat => {
          subCategories.map(subCatId => {
            if (subCat._id == subCatId) {
              subCat['selected'] = true
              this.selectedSubCategories.push(subCat)
            }
          })
        })
      }
    })
  }

  showPreviousStep() {
    this.showFirstStep = true;
  }

  async editVendorDetails(form) {
    this.hairstylistForm = form;
    if (form.valid) {
      this.createVendorRequestBody();
      await this.editVendorAPICall();
      this.router.navigateByUrl('vendors/manage')
      this.uploadAssets();
    }
  }

  editVendorAPICall(): Promise<Vendor> {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.updateVendorById(this.hairstylistData._id, this.hairstylistData).subscribe(result => {
        resolve(result.data);
      })
    })
  }

  async deleteBannerImage(bannerData) {
    const index = this.hairstylistData.banners.findIndex(banner => banner._id === bannerData._id)
    if (index > -1) {
      if (index < this.hairstylistData.banners.length - 1) {
        this.bannerActiveIndex = index + 1;
      }
      this.changeDetector.detectChanges();
      await this.deleteUploadedImageAPICall(bannerData.url);
      this.hairstylistData.banners.splice(index, 1);
      this.hairstylistData = await this.editVendorAPICall();
    }
  }

  async deleteWorksImage(workData) {
    const index = this.hairstylistData.work_gallery.findIndex(work => work.file_name === workData.file_name)
    if (index > -1) {
      if (index < this.hairstylistData.work_gallery.length - 1) {
        this.worksActiveIndex = index + 1;
      }
      this.changeDetector.detectChanges();
      await this.deleteUploadedImageAPICall(workData.url);
      this.hairstylistData.work_gallery.splice(index, 1);
      this.hairstylistData = await this.editVendorAPICall();
    }
  }

  async deleteDocument(document) {
    await this.deleteUploadedImageAPICall(document.url);
    const index = this.hairstylistData.documents.findIndex(doc => doc.file_name === document.file_name)
    if (index > -1) {
      this.hairstylistData.documents.splice(index, 1);
    }
  }

  deleteUploadedImageAPICall(url) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.deleteUploadedImage(url).subscribe(result => {
        resolve(result);
      })
    })
  }

  async createSlug() {
    if (this.hairstylistData.salon_name)
      this.hairstylistData.slug = await this.generateSlugAPICall(this.hairstylistData.salon_name);
  }

  generateSlugAPICall(title): Promise<string> {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.generateSlug({ title: title }).subscribe(result => {
        resolve(result.data.slug);
      })
    })
  }

  filterCategoryList(value) {
    this.filteredCategoryList = this.filterByValueContains(this.categoryList, value);
  }

  filterByValueContains(list, string) {
    const regExp = new RegExp(string, 'i');
    const result = list.reduce((category, { name, _id, selected, sub_categories = [] }) => {
      const next = sub_categories.filter(child => child.name.match(regExp));
      if (name.match(regExp) || next.length > 0) {
        category.push({ name, _id, selected, sub_categories: next });
      }
      return category;
    }, []);
    return result;
  }

  getSelectedCategoryIds() {
    const categoryIds = this.selectedCategories.map(item => item._id);
    return categoryIds;
  }

  getSelectedSubCategoryIds() {
    const subCategoryIds = this.selectedSubCategories.map(item => item._id);
    return subCategoryIds;
  }

  categoryChange(event, category) {
    if (event.checked) {
      this.selectedCategories.push(category);
      this.changeCategorySelection(category._id, true);
    } else {
      this.deleteCategoryFromList(category._id);
    }
  }

  subCategoryChange(event, category, subCategory) {
    if (event.checked) {
      this.selectedSubCategories.push(subCategory);
      subCategory['selected'] = true;
    } else {
      this.deleteSubCategoryFromList(subCategory);
    }
  }

  deleteSubCategoryFromList(subCategory) {
    subCategory['selected'] = false;
    const index = this.selectedSubCategories.findIndex(subCategoryItem => subCategoryItem._id === subCategory._id);
    if (index > -1) {
      this.selectedSubCategories.splice(index, 1);
    }
  }

  deleteCategoryFromList(categoryId) {
    const index = this.selectedCategories.findIndex(category => category._id === categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    }
    this.changeCategorySelection(categoryId, false);
  }

  categoryBoxClick(event, category, subCategory) {
    if (event.target.classList.contains('remove-category')) {
      event.stopPropagation();
      this.changeCategorySelection(category._id, false);
      this.changeFilteredCategorySelection(category._id, false);
      this.deleteCategoryFromList(category._id);
    } else if (event.target.classList.contains('remove-sub-category')) {
      event.stopPropagation();
      this.deleteSubCategoryFromList(subCategory);
    } else {
      this.showCategoryList(event);
    }
  }

  showCategoryList(event) {
    this.categoryMenu.toggle(event);
  }

  changeCategorySelection(categoryId, status) {
    this.categoryList.map(item => {
      if (item._id == categoryId) {
        item['selected'] = status;
      }
    })
  }

  changeFilteredCategorySelection(categoryId, status) {
    this.filteredCategoryList.map(item => {
      if (item._id == categoryId) {
        item['selected'] = status;
      }
    })
  }

  showFirstStepClick(form, id: number) {
    this.selectedTab = id;
    if (!form || form.invalid)
      return
    this.showFirstStep = true;
    this.showSecondStep = false;
    this.showThirdStep = false;
  }

  showSecondStepClick(form, id: number) {
    this.selectedTab = id;
    if (!form || form.invalid)
      return
    this.showFirstStep = false;
    this.showSecondStep = true;
    this.showThirdStep = false;
  }

  showThirdStepClick(form, id: number) {
    this.selectedTab = id;
    if (!form || form.invalid)
      return
    this.showFirstStep = false;
    this.showSecondStep = false;
    this.showThirdStep = true;
  }

  goPreviousToFistStep() {
    this.showFirstStep = true;
    this.showSecondStep = false;
    this.showThirdStep = false;
  }

  goPreviousToSecondStep() {
    this.showFirstStep = false;
    this.showSecondStep = true;
    this.showThirdStep = false;
  }

  onProfileStatusChange(status) {
    this.vendorStatus.name = status;
    console.log('vendorStatus.name', this.vendorStatus.name = status);
    this.vendorStatus.display_name = status[0].toUpperCase() + status.slice(1);
  }

  onApprovalStatusChange(status) {
    this.vendorApprovalStatus.name = status;
    this.vendorApprovalStatus.display_name = status[0].toUpperCase() + status.slice(1);
  }
}
