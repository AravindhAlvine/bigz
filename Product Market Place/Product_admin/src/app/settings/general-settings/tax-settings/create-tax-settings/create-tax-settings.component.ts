import { Component, OnInit } from '@angular/core';
import { TaxSettings } from 'src/app/models/Settings';
import { SettingsService } from 'src/app/settings/settings.service';
import { COUNTRIES } from '../../../../../assets/data/countries';

@Component({
  selector: 'app-create-tax-settings',
  templateUrl: './create-tax-settings.component.html',
  styleUrls: ['./create-tax-settings.component.scss']
})
export class CreateTaxSettingsComponent implements OnInit {
  selectedZoneCountry = {};
  taxSettings: TaxSettings = {} as TaxSettings;
  optionYesNo = [
    "Yes", "No"
  ];
  stateList = []
  countryList = []
  taxClass = [
    'General'
  ]
  isEditMode: boolean = false;
  selectedTaxId;
  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getCountryList();
   this.isEditFlow();
  }

  async isEditFlow() {
    const editTaxData = JSON.parse(sessionStorage.getItem('taxSetting'));    
    if (editTaxData) {
      this.isEditMode = true;
      this.selectedTaxId = editTaxData['_id'];
      this.taxSettings = editTaxData;
      this.selectedZoneCountry['name'] = this.taxSettings.tax_zone_country;
      await this.fillStateListBySelectedCountry(this.selectedZoneCountry['name']);
    }
  }

  saveTaxSettings(form) {
    this.taxSettings.tax_zone_country = this.selectedZoneCountry['name'];
    this.settingsService.saveGeneralSettings('617794db86146f0411490025', { tax_settings: this.taxSettings }).subscribe(result => {
    })
  }

  getCountryList() {
    this.countryList = COUNTRIES.map(country => {
      return { name: country.CountryName }
    })
  }

  onCountryChange(event) {
    this.fillStateListBySelectedCountry(event.value.name)
  }

  fillStateListBySelectedCountry(countryName) {
    return new Promise((resolve, reject) => {
      COUNTRIES.filter(country => {
        if (country.CountryName == countryName) {
          this.stateList = country.States
        }
      })
      resolve(true);
    })
  }

  ngOnDestroy() {
    sessionStorage.removeItem('taxSetting');
  }

}
