import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardTotalCounts } from 'src/app/models/Dashboard';
import { GeneralResponse } from 'src/app/models/GeneralResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getDashboardTotalCounts(): Observable<GeneralResponse<DashboardTotalCounts>> {
    return this.http.get<GeneralResponse<DashboardTotalCounts>>(environment.dashboard.getTotalCounts)
      .pipe(
        map(result => result)
      );
  }
 }
