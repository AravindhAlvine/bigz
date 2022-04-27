import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class BookingDetailsComponent implements OnInit {

  items!: MenuItem[];
  activeIndex: number = 1;
  @Input('bookingId') bookingId: any;


  constructor(private messageService: MessageService) { }

  ngDoCheck(): void {
    this.activeIndex = this.activeIndex == undefined? this.activeIndex : this.bookingId;
  }

  ngOnInit(): void {
    this.items = [{
      label: 'CART',
      command: (event: any) => {
        this.activeIndex = 0;
        this.messageService.add({ severity: 'info', summary: 'Cart Step', detail: event.item.label });
      }
    },
    {
      label: 'INFORMATION',
      command: (event: any) => {
        this.activeIndex = 1;
        this.messageService.add({ severity: 'info', summary: 'Information Selection', detail: event.item.label });
      }
    },
    {
      label: 'PAYMENT',
      command: (event: any) => {
        this.activeIndex = 2;
        this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
      }
    },
    {
      label: 'COMPLETE',
      command: (event: any) => {
        this.activeIndex = 3;
        this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
      }
    }];

  }

  changeTabs(_event: any) {
    // console.log('event', _event, this.bookingId);
  }


}
