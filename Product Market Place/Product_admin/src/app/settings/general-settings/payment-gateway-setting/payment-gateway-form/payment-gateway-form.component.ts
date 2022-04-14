import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/Status';
import { SettingsService } from 'src/app/settings/settings.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { PAYMENT_GATEWAY_STATUS } from 'src/assets/data/status';

@Component({
  selector: 'app-payment-gateway-form',
  templateUrl: './payment-gateway-form.component.html',
  styleUrls: ['./payment-gateway-form.component.scss']
})
export class PaymentGatewayFormComponent implements OnInit {
  gatewayDetails = {};
  gatewayStatus: Status[] = PAYMENT_GATEWAY_STATUS;
  selectedMode = {
    name: ''
  };
  apiKeys = {};
  paymentMode = [
    {
      name: 'Sandbox'
    },
    {
      name: 'Live'
    }
  ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService,
    private toastService: ToastService,
  ) { }
  deafultStatus = {
    "name": "enabled",
    "display_name": "Enabled"
  };
  ngOnInit(): void {
    const gatewayName = this.activatedRoute.snapshot.paramMap.get('gateway_name');
    this.getPaymentGatewayDetailsAPICall(gatewayName);
  }

  getPaymentGatewayDetailsAPICall(gatewayName) {
    this.settingsService.gePaymentGatewayDetails(gatewayName).subscribe(result => {
      this.gatewayDetails = result.data;
      this.gatewayDetails['api_keys'].forEach(element => {
        if(element['is_active'] == true) {
          this.selectedMode = {
            name: element.mode
          }
        }
      });
    })
  }

  getAPIKeyByMode(mode) {
    const apiKey = this.gatewayDetails['api_keys'].find(key => {
      return key['mode'] == mode
    })
    return apiKey;
  }

  onGatewayModeChange(mode) {
    this.selectedMode = mode;
  }

  savePaymentGatewayDetails() {
    this.gatewayDetails['api_keys'].forEach(item => {
      if(item.mode == this.selectedMode.name) {
        item.is_active = true;
      } else {
        item.is_active = false;
      }
    });    
    this.savePaymentGatewayDetailsAPICall();
  }

  savePaymentGatewayDetailsAPICall() {
    this.settingsService.savePaymentGatewaySettings(this.gatewayDetails['_id'], this.gatewayDetails).subscribe(result => {
      this.toastService.showSuccessToast('Details saved successfully')
    })
  }

}
