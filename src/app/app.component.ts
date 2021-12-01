import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SettingsService } from './settings/settings.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'yourBestHairAdmin';
  constructor(
    private primengConfig: PrimeNGConfig,
    private settingsService: SettingsService,
  ) {
  }

  ngOnInit() {
    this.getStoreInfoAPICall();
    this.primengConfig.ripple = true;
  }

  getStoreInfoAPICall() {
    this.settingsService.getGeneralSettingDetails().subscribe(result => {
      sessionStorage.setItem('adminLogo', JSON.stringify(result.data.logos.admin_logo))
    })
  }
}
