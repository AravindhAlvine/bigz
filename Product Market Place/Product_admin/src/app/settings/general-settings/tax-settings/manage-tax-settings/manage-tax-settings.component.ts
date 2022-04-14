import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-manage-tax-settings',
  templateUrl: './manage-tax-settings.component.html',
  styleUrls: ['./manage-tax-settings.component.scss']
})
export class ManageTaxSettingsComponent implements OnInit {
  taxList = [];
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getTaxSettingsListAPICall();
  }

  getTaxSettingsListAPICall() {
    this.settingsService.getTaxSettingsList().subscribe(result => {
      this.taxList = result.data;
    })
  }

  editTaxSetting(tax) {
    sessionStorage.setItem('taxSetting', JSON.stringify(tax));
    this.router.navigate(['/settings/tax/edit']);
  }

  deleteTaxSettingItem(event: any, taxId: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete?',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {
        this.deleteTaxSettingItemByIdAPICall(taxId);
      },
      reject: () => { }
    });
  }

  deleteTaxSettingItemByIdAPICall(taxId) {
    this.settingsService.deleteTaxSettingItemById(taxId).subscribe(result => {
      this.toastService.showSuccessToast('Tax setting deleted successfully');
      this.getTaxSettingsListAPICall();
    })
  }
}
