import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-smtp-email-settings',
  templateUrl: './smtp-email-settings.component.html',
  styleUrls: ['./smtp-email-settings.component.scss']
})
export class SmtpEmailSettingsComponent implements OnInit {
  @Input() smtpDetails = {};
  @Input() settingId;
  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
  }

  saveSMTPInfo(form) {
    if (form.invalid) {
      return;
    }
    this.saveSMTPDetails();
  }

  saveSMTPDetails() {
    this.saveSMTPDetailsAPICall();
  }

  saveSMTPDetailsAPICall() {
    this.smtpDetails['is_enabled'] = true;
    this.smtpDetails['service'] = 'SMTP';
    this.settingsService.saveGeneralSettings(this.settingId, { 'email_settings': this.smtpDetails }).subscribe(result => {
      this.toastService.showSuccessToast('Details Saved Successfully');
    })
  }
}
