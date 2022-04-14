import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-gmail-email-settings',
  templateUrl: './gmail-email-settings.component.html',
  styleUrls: ['./gmail-email-settings.component.scss']
})
export class GmailEmailSettingsComponent implements OnInit {
  @Input() gmailDetails = {};
  @Input() settingId;

  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,

  ) { }

  ngOnInit(): void {
  }

  saveGmailDetails() {
    this.saveGmailDetailsAPICall();
  }

  saveGmailDetailsAPICall() {
    this.gmailDetails['is_enabled'] = true;
    this.gmailDetails['service'] = 'Gmail';
    this.settingsService.saveGeneralSettings(this.settingId, { 'email_settings': this.gmailDetails }).subscribe(result => {
      this.toastService.showSuccessToast('Details Saved Successfully');
    })
  }
}
