import { Component, OnInit } from '@angular/core';
import { SEO } from 'src/app/models/Settings';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-seo-settings',
  templateUrl: './seo-settings.component.html',
  styleUrls: ['./seo-settings.component.scss']
})
export class SeoSettingsComponent implements OnInit {
  seoDetails: SEO = {} as SEO;
  currentSettingId: string;
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
      this.seoDetails = result.data.seo || {} as SEO;
    })
  }

  saveGeneralSettingsDetailsAPICall() {
    return new Promise((resolve, reject) => {
      this.settingsService.saveGeneralSettings(this.currentSettingId, { seo: this.seoDetails }).subscribe(result => {
        this.currentSettingId = result.data._id;
        resolve(result);
      })
    })
  }
}
