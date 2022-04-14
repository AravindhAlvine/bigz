/// <reference  types="@types/googlemaps"  />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '../../models/Location';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from 'ngx-intl-tel-input';
import { PhoneNumber, PhoneNumberInput } from '../../models/PhoneNumber';
import { CustomersService } from '../customers.service';
import { ToastService } from '../../shared/services/toast.service';
import { BillingAddress, Customer } from '../../models/Customer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Status } from 'src/app/models/Status';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  @ViewChild('googleAutoCompleteAddress') googleAutoCompleteAddress: ElementRef;
  customerData: Customer = {} as Customer;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneNumber: PhoneNumberInput;
  location: Location = { type: 'Point' } as Location;
  isEditMode: boolean = false;
  selectedLocation: string;
  customerForm: NgForm;
  showEditBillingAddressForm: boolean = false;
  billingAddress: BillingAddress = {} as BillingAddress;
  activeBillingAdressIndex: number;
  billingAddressPhoneNumber: PhoneNumberInput;

  customerStatus: Status = {
    name: 'active',
    display_name: 'Active'
  } as Status;

  Approvel: any = [
    { name: 'Approved' }, { name: 'Pending' }, { name: 'Declained' },
  ];

  constructor(
    private customersService: CustomersService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isCustomerInEditMode();
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  isCustomerInEditMode() {
    const editCustomerData = JSON.parse(localStorage.getItem('editCustomer'));
    if (editCustomerData) {
      this.isEditMode = true;
      this.customerData = editCustomerData;
      this.customerData.full_name = `${this.customerData.first_name} ${this.customerData.last_name}`;
      this.phoneNumber = {
        countryCode: editCustomerData.phone_number.country_code,
        dialCode: editCustomerData.phone_number.dial_code,
        internationalNumber: editCustomerData.phone_number.international_number,
        number: editCustomerData.phone_number.number
      }
    }
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
          this.customerData['city'] = component.long_name
          break;

        case "administrative_area_level_1": {
          (document.querySelector("#state") as HTMLInputElement).value = component.short_name;
          this.customerData['state'] = component.short_name
          break;
        }

        case "country":
          (document.querySelector("#country") as HTMLInputElement).value = component.long_name;
          this.customerData['country'] = component.long_name
          break;
      }
    }

    (document.querySelector("#street_address2") as HTMLInputElement).value = streetAddress;
    this.customerData['street_address2'] = streetAddress;
    this.customerData['zip_code'] = postcode;

    (document.querySelector("#street_address1") as HTMLInputElement).focus();
    this.location['coordinates'] = [place.geometry.location.lng(), place.geometry.location.lat()];
    this.customerData['formatted_address'] = place.formatted_address;
  }

  createCustomer(form) {
    this.customerForm = form;
    if (form.valid) {
      this.getCustomerRequestBody();
      this.createCustomerAPICall();
    }
  }

  getCustomerRequestBody() {
    const phoneNumber: PhoneNumber = {
      country_code: this.phoneNumber.countryCode,
      dial_code: this.phoneNumber.dialCode,
      international_number: this.phoneNumber.internationalNumber,
      number: this.phoneNumber.number
    }
    this.customerData.phone_number = phoneNumber;
    if (this.location.coordinates) {
      this.customerData.location = this.location;
    }
    this.customerData.status = this.customerStatus;
  }

  createCustomerAPICall() {
    return new Promise((resolve, reject) => {
      this.customersService.createCustomer(this.customerData).subscribe(result => {
        this.toastService.showSuccessToast('Customer Created Successfully');
        this.customerForm.resetForm();
        this.router.navigate(['./customers/manage']);
        resolve(result);
      })
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('editCustomer');
  }

  async editCustomer(form) {
    this.customerForm = form;
    if (form.valid) {
      this.getCustomerRequestBody();
      await this.editCustomerAPICall(this.customerData['_id'], this.customerData);
      this.toastService.showSuccessToast('Customer details updated Successfully');
      this.customerForm.resetForm();
      this.router.navigateByUrl('customers/manage');
    }
  }

  editCustomerAPICall(id, request): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.customersService.updateCustomerById(id, request).subscribe(result => {
        resolve(result.data);
      })
    })
  }

  editAddress(billingAddress: BillingAddress, index: number) {
    document.getElementById(`billingAddress${index}`).classList.add('d-none');
    this.billingAddress = billingAddress;
    this.billingAddressPhoneNumber = {
      countryCode: billingAddress.phone_number.country_code,
      dialCode: billingAddress.phone_number.dial_code,
      internationalNumber: billingAddress.phone_number.international_number,
      number: billingAddress.phone_number.number
    }
    this.activeBillingAdressIndex = index;
    this.showEditBillingAddressForm = true;
  }

  cancelUpdateBillingAddress() {
    this.hideBillingAddressForm();
  }

  hideBillingAddressForm() {
    document.getElementById(`billingAddress${this.activeBillingAdressIndex}`).classList.remove('d-none');
    this.showEditBillingAddressForm = false;
  }

  async updateBillingAddress() {
    this.getSaveBillingDetailsBody();
    this.customerData = await this.editCustomerAPICall(this.customerData['_id'], { billing_address: this.billingAddress });
    this.hideBillingAddressForm();
  }

  getSaveBillingDetailsBody() {
    const phoneNumber: PhoneNumber = {
      country_code: this.billingAddressPhoneNumber.countryCode,
      dial_code: this.billingAddressPhoneNumber.dialCode,
      international_number: this.billingAddressPhoneNumber.internationalNumber,
      number: this.billingAddressPhoneNumber.number
    }
    this.billingAddress.phone_number = phoneNumber;
  }

  async setAddressAsPrimary(billingAddressId) {
    const request = this.getSetBillingAdressPrimaryRequestBody(billingAddressId);
    this.customerData = await this.editCustomerAPICall(this.customerData['_id'], request);
  }

  getSetBillingAdressPrimaryRequestBody(billingAddressId) {
    return {
      billing_address: {
        _id: billingAddressId,
        is_primary: true
      }
    }
  }

  onProfileStatusChange(status) {
    this.customerStatus.name = status;
    this.customerStatus.display_name = status[0].toUpperCase() + status.slice(1);
  }
}
