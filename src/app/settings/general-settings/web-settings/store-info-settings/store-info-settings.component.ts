import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { StoreInfo } from 'src/app/models/Settings';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from 'ngx-intl-tel-input';
import { PhoneNumber, PhoneNumberInput } from 'src/app/models/PhoneNumber';
import { Location } from '../../../../models/Location';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-store-info-settings',
  templateUrl: './store-info-settings.component.html',
  styleUrls: ['./store-info-settings.component.scss']
})
export class StoreInfoSettingsComponent implements OnInit {
  @ViewChild('googleAutoCompleteAddress') googleAutoCompleteAddress: ElementRef;
  location: Location = { type: 'Point' } as Location;
  storeInfo: StoreInfo = {} as StoreInfo;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneNumber: PhoneNumberInput;
  currentSettingId: string;

  constructor(
    private el: ElementRef,
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) { }

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.getElementsByClassName('ng-invalid');
    if (invalidControl.length != 0) {
      invalidControl[1].focus();
    }
  }
  
  ngOnInit(): void {
    this.getStoreInfoAPICall();
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.googleAutoCompleteAddress.nativeElement,
      {
        componentRestrictions: { country: 'US' },
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
          (document.querySelector("#city") as HTMLInputElement).value = component.long_name;
          this.storeInfo['city'] = component.long_name
          break;

        case "administrative_area_level_1": {
          (document.querySelector("#state") as HTMLInputElement).value = component.short_name;
          this.storeInfo['state'] = component.short_name
          break;
        }

        case "country":
          (document.querySelector("#country") as HTMLInputElement).value = component.long_name;
          this.storeInfo['country'] = component.long_name
          break;
      }
    }

    (document.querySelector("#street_address2") as HTMLInputElement).value = streetAddress;
    this.storeInfo['street_address2'] = streetAddress;
    this.storeInfo['zip_code'] = postcode;

    (document.querySelector("#street_address1") as HTMLInputElement).focus();
    this.location['coordinates'] = [place.geometry.location.lng(), place.geometry.location.lat()];
    this.storeInfo.formatted_address = place.formatted_address;
  }

  async saveStoreInfo(form) {
    if (form.valid) {
      this.getStoreInfoRequestBody();
      await this.saveGeneralSettingsDetailsAPICall();
      this.toastService.showSuccessToast('Details saved Successfully');
    }
  }

  saveGeneralSettingsDetailsAPICall() {
    return new Promise((resolve, reject) => {
      this.settingsService.saveGeneralSettings(this.currentSettingId, {store_info: this.storeInfo}).subscribe(result => {
        this.currentSettingId = result.data._id;
        resolve(result);
      })
    })
  }

  getStoreInfoRequestBody() {
    if (this.phoneNumber) {
      const phoneNumber: PhoneNumber = {
        country_code: this.phoneNumber.countryCode,
        dial_code: this.phoneNumber.dialCode,
        international_number: this.phoneNumber.internationalNumber,
        number: this.phoneNumber.number
      }
      this.storeInfo.phone_number = phoneNumber;
    }
    this.storeInfo.location = this.location;
  }

  getStoreInfoAPICall() {
    this.settingsService.getGeneralSettingDetails().subscribe(result => {
      this.currentSettingId = result.data._id;
      this.storeInfo = result.data.store_info;
      if(this.storeInfo.phone_number) {
        this.phoneNumber = {
          countryCode: this.storeInfo.phone_number.country_code,
          dialCode: this.storeInfo.phone_number.dial_code,
          internationalNumber: this.storeInfo.phone_number.international_number,
          number: this.storeInfo.phone_number.number
        }
      }
      this.location = this.storeInfo.location;
    })
  }

}
