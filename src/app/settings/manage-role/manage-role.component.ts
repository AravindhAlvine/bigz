import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/models/UserRole';
import { SettingsService } from '../settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Status } from 'src/app/models/Status';
import { ROLE_STATUS } from 'src/assets/data/status';


interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.scss']
})
export class ManageRoleComponent implements OnInit {
  loading: boolean = false;
  roleList: UserRole[] = [];

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

  roleStatus: Status[] = ROLE_STATUS;
  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService
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

    this.getRoleListAPICall();
  }

  getRoleListAPICall() {
    this.settingsService.getUserRoles().subscribe(result => {
      this.roleList = result.data;
    })
  }

  deleteRole(roleId) {    
    this.settingsService.deleteRoleById(roleId).subscribe(result => {
      this.toastService.showSuccessToast(result.message);
      this.getRoleListAPICall();
    })
  }

  async statusChangeEvent(role) {
    const roleStatus = {
      status: role.status
    }
    await this.updateRoleDetailsAPICall(role._id, roleStatus);
  }

  updateRoleDetailsAPICall(id, body) {
    this.settingsService.updateRoleDetailsById(id, body).subscribe(result => {
    })
  }
}
