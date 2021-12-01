import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) { }

  showSuccessToast(message: string) {
    this.messageService.add({ key: 'serverSuccess', severity: 'success', summary: message });
  }

  showInfoToast(message: string) {
    this.messageService.add({ key: 'serverInfo', severity: 'info', summary: message });
  }

  showErrorToast(message: string) {
    this.messageService.add({ key: 'serverError', severity: 'error', summary: message });
  }

  // serverErrors
}
