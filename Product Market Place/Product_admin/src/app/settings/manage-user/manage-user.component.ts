import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/Status';
import { User } from 'src/app/models/User';
import { ToastService } from 'src/app/shared/services/toast.service';
import { USER_STATUS } from 'src/assets/data/status';
import { SettingsService } from '../settings.service';

interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  loading: boolean = false;
  userList: User[];

  cities: City[];
  selectedCity: City;

  optionDays: Days[];
  selectedDays: Days;

  calandarIcon = '../../../assets/icon/calandar.svg';
  reviewIcon = '../../../assets/images/review/review.svg';
  searchBtn = '../../../assets/icon/search-button.svg';

  today = new Date();
  dd: any;
  mm: any;
  yyyy: any;
  currentDate : any

  userStatus: Status[] = USER_STATUS;
  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.optionDays = [
    {option: 'Past 30 Days', value: '30'},
    {option: 'Past 10 Days', value: '10'},
    {option: 'Past 20 Days', value: '20'},
    {option: 'Past 40 Days', value: '40'},
  ];

   }

   ngOnInit(): void {

    this.dd = this.today.getDate();
    this.mm = this.today.getMonth(); 
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);

    this.getUserListAPICall();
  }

  getUserListAPICall() {
    this.settingsService.getUserList().subscribe(result => {
      this.userList = result.data;
    })
  }

  deleteUser(userId) {
    this.settingsService.deleteUserById(userId).subscribe(result => {
      this.toastService.showSuccessToast(result.message);
      this.getUserListAPICall();
    })
  }

  async statusChangeEvent(user) {
    const userStatus = {
      status: user.status
    }
    await this.updateUserDetailsAPICall(user._id, userStatus);
  }

  updateUserDetailsAPICall(id, body) {
    this.settingsService.updateUserDetailsById(id, body).subscribe(result => {
    })
  }
}
