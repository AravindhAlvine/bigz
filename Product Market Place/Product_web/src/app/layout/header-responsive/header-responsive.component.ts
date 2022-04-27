import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexService } from 'src/app/home/index/index.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent implements OnInit {

  MenuItems: any;
  mycartItems: any;
  showNewRegister: boolean  = false;
  showExitingUser: boolean = false;
  sidebarNaviMobile: boolean = false;
  constructor(
    private http: HttpClient,
    private mockService: IndexService
  ) { }
  getHeaderMenu(): Observable<any> {
    return this.http.get(environment.mockData)
  }
  getMyCartItems(): void {
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.mycartItems = res.mycartItems
    })
  }

  eventshowNewRegister(): void {
    this.showNewRegister = true
  }
  eventShowExitingUser(): void {
    this.showNewRegister = false
   setTimeout(() => {
    this.showExitingUser = true;
    
   }, 200);
  }
  eventShowSidebar(): void {
    this.sidebarNaviMobile = true
  }
  ngOnInit(): void {
    this.getMyCartItems();
    this.getHeaderMenu().subscribe((res: any) => {
      this.MenuItems = res.headerMenu
    })
  }
}
