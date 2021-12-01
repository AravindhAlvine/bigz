import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-web-settings',
  templateUrl: './web-settings.component.html',
  styleUrls: ['./web-settings.component.scss']
})
export class WebSettingsComponent implements OnInit {
  
  // sections = {
  //   "storeInfo": true,
  //   "logo": false,
  //   "SEO": false,
  //   "socialMedia": false
  // };

  constructor() { }

  ngOnInit(): void {
  }

  // navigateToSection(sectionName) {
  //   Object.keys(this.sections).forEach(section => {
  //     if (section == sectionName) {
  //       this.sections[section] = true;
  //     } else {
  //       this.sections[section] = false;
  //     }
  //   })
  // }
}
