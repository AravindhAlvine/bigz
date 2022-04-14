import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from 'ngx-intl-tel-input';import { PhoneNumber, PhoneNumberInput } from 'src/app/models/PhoneNumber';
import { Status } from 'src/app/models/Status';
import { User } from 'src/app/models/User';
import { UserRole } from 'src/app/models/UserRole';
import { ToastService } from 'src/app/shared/services/toast.service';
import { SettingsService } from '../settings.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateUserComponent implements OnInit {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneNumber: PhoneNumberInput;
  isEditMode: boolean = false;
  userData: User = {} as User;
  userRoles: UserRole[];
  selectedRole: string;
  userStatus: Status = {
    name: 'active',
    display_name: 'Active'
  } as Status;
  
  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserRolesAPICall();
    this.isUrlContainsEditId();
  }

  onUserStatusChange(status) {
    this.userStatus.name = status;
    this.userStatus.display_name = status[0].toUpperCase() + status.slice(1);
  }

  getUserRolesAPICall() {
    this.settingsService.getUserRoles().subscribe(result => {
      this.userRoles = result.data;
    })
  }

  async createUser(form) {
    if (form.invalid)
      return;
    this.createUserRequestBody();
    await this.createUserAPICall();
    form.reset();
  }

  createUserRequestBody() {
    // const phoneNumber: PhoneNumber = {
    //   country_code: this.phoneNumber.countryCode,
    //   dial_code: this.phoneNumber.dialCode,
    //   international_number: this.phoneNumber.internationalNumber,
    //   number: this.phoneNumber.number
    // }
    // this.userData['phone_number'] = phoneNumber;
    this.userData['status'] = this.userStatus;
  }

  createUserAPICall() {
    return new Promise((resolve, reject) => {
      this.settingsService.createUser(this.userData).subscribe(result => {
        this.toastService.showSuccessToast(result.message);
        resolve(result);
      })
    })
  }

  isUrlContainsEditId() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.getUserDetailsByIdAPICall(id);
    }
  }

  getUserDetailsByIdAPICall(id) {
    this.settingsService.getUserDetailsById(id).subscribe(result => {
      this.userData = result.data;
      this.userStatus = result.data.status;
      console.log('this.userData', this.userData);
      
      // this.phoneNumber = {
      //   countryCode: this.userData.phone_number.country_code,
      //   dialCode: this.userData.phone_number.dial_code,
      //   internationalNumber: this.userData.phone_number.international_number,
      //   number: this.userData.phone_number.number
      // }
    })
  }

  updateUser(form) {
    if (form.invalid)
      return;
    this.createUserRequestBody();
    this.updateUserAPICall();
  }

  updateUserAPICall() {
    this.settingsService.updateUserDetailsById(this.userData._id, this.userData).subscribe(result => {
      this.router.navigate(['/settings/user/manage']);
    })
  }
}
