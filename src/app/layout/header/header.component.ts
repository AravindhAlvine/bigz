import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FileData } from 'src/app/models/FileData';
import { AuthService } from '../.././auth/auth.service';

// interface MenuItem {
//   label: string,
//   icon: string,
//   url: string,
//   routerLink: string
// }
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  adminLogo: FileData;

  @Input() message: any;
  @Output() informParent = new EventEmitter();
  hamburger: boolean = false;
  screenWidth: number;
  // avator: any=[];
  // avator_dropdown: any;

  constructor(private messageService: MessageService, private authService: AuthService,) {
    
  }

  ngOnInit(): void {
    // this.screenWidth = window.innerWidth;
    // window.onresize = () => {
    //   // set screenWidth on screen size change
    //   this.screenWidth = window.innerWidth;
    //   if(this.screenWidth > 720){
    //     this.hamburger = true;
    //   }
    // };

    this.adminLogo = JSON.parse(sessionStorage.getItem('adminLogo'));
    console.log('this.adminLogo', this.adminLogo)
    this.items = [
      // {
      //   label: 'Setting',
      //   icon: 'pi pi-refresh',
      //   url: 'http://angular.io',
      //   routerLink: ''
      // },
      {
        label: 'Logout',
        icon: 'pi pi-times',
        // url: '',
        // routerLink: '/login',
        command: () => {
          this.logOut();
        },
      },

    ];
  }

  toggleHamburger() {
    this.hamburger = !this.hamburger;
    console.log('this.hamburger', this.hamburger)
    this.informParent.emit(this.hamburger);
  }

  logOut() {
    this.authService.logout();
  }


}
