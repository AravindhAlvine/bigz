import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SettingsService } from './settings/settings.service';
import { Router, NavigationEnd } from '@angular/router';


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
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getStoreInfoAPICall();
    this.primengConfig.ripple = true;
    // top of the page using navigation
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  getStoreInfoAPICall() {
    this.settingsService.getGeneralSettingDetails().subscribe(result => {
      sessionStorage.setItem('adminLogo', JSON.stringify(result.data.logos.admin_logo))
    })
  }
}
