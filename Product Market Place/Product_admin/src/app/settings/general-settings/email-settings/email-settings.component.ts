import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.scss']
})
export class EmailSettingsComponent implements OnInit {
  sections = {
    "smtp": true,
    "gmail": false
  };
  serviceProvider = [
    {
      name: 'SMTP'
    },
    {
      name: 'Gmail'
    }
  ]
  selectedServiceProvider = {
    name: ''
  };
  settingDetails = {};
  gmailSettings = {};
  smtpSettings = {};
  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getEmailSettingsDetailsAPICall();
  }

  navigateToSection(sectionName) {
    Object.keys(this.sections).forEach(section => {
      if (section == sectionName) {
        this.sections[section] = true;
      } else {
        this.sections[section] = false;
      }
    })
  }

  getEmailSettingsDetailsAPICall() {
    this.settingsService.getEmailSettingsDetails().subscribe(result => {
      this.settingDetails = result.data;
      if (this.settingDetails['email_settings'].length > 0) {
        this.settingDetails['email_settings'].forEach(element => {
          if(element['is_enabled'] == true) {
            this.selectedServiceProvider = {
              name: element.service
            }
          }          
          if (element['service'] == 'Gmail') {
            this.gmailSettings = element;
          }
          if (element['service'] == 'SMTP') {
            this.smtpSettings = element;
          }
        });
      }
    })
  }
}
