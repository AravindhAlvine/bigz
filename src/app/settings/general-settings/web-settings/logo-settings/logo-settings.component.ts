import { Component, OnInit } from '@angular/core';
import { LogosSettings } from 'src/app/models/Settings';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-logo-settings',
  templateUrl: './logo-settings.component.html',
  styleUrls: ['./logo-settings.component.scss']
})
export class LogoSettingsComponent implements OnInit {
  currentSettingId: string;
  logos: LogosSettings = {} as LogosSettings;
  uploadAssestsformData = new FormData();
  urlData: any = File; 

  constructor(
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getGeneralSettingsAPICall();
  }

  getGeneralSettingsAPICall() {
    this.settingsService.getGeneralSettingDetails().subscribe(result => {
      this.currentSettingId = result.data._id;
      this.logos = result.data.logos;
    })
  }

  logosChangeEvent(fileInput: any, key) {
    const file = <File>fileInput.currentFiles[0];
    this.uploadAssestsformData.append(key, file);
  }

  async uploadAssets() {
   await this.uploadAssetsAPICall();
    this.toastService.showSuccessToast('Logos saved Successfully');
    this.getGeneralSettingsAPICall();
  }

  uploadAssetsAPICall() {
    return new Promise((resolve, reject) => {
      this.settingsService.uploadStoreAssets(this.uploadAssestsformData, this.currentSettingId).subscribe(result => {
        resolve(result);
      })
    })
  }

  // vendor image replace
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlData = event.target.result;
      }
    }
  }

}
