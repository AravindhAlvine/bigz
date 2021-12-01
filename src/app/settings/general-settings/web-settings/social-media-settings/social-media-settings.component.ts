import { Component, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/models/Settings';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-social-media-settings',
  templateUrl: './social-media-settings.component.html',
  styleUrls: ['./social-media-settings.component.scss']
})
export class SocialMediaSettingsComponent implements OnInit {
  currentSettingId: string;
  socialMediaDetails: SocialMedia = {} as SocialMedia;

  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getStoreInfoAPICall();
  }

  async saveSeoDetails() {
    await this.saveGeneralSettingsDetailsAPICall();
    this.toastService.showSuccessToast('Details saved Successfully');
  }

  getStoreInfoAPICall() {
    this.settingsService.getGeneralSettingDetails().subscribe(result => {
      this.currentSettingId = result.data._id;
      this.socialMediaDetails = result.data.social_links || {} as SocialMedia;
    })
  }

  saveGeneralSettingsDetailsAPICall() {
    return new Promise((resolve, reject) => {
      this.settingsService.saveGeneralSettings(this.currentSettingId, { social_links: this.socialMediaDetails }).subscribe(result => {
        this.currentSettingId = result.data._id;
        resolve(result);
      })
    })
  }

}
