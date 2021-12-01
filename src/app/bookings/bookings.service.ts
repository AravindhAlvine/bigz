import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/Booking';
import { GeneralResponse } from '../models/GeneralResponse';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private http: HttpClient
  ) { }

  getBookingList(): Observable<GeneralResponse<Booking[]>> {
    return this.http.get<GeneralResponse<Booking[]>>(environment.bookings.getBookingList)
      .pipe(
        map(result => result)
      );
  }

  updateBookingById(id: string, body: Booking): Observable<GeneralResponse<Booking>> {
    return this.http.put<GeneralResponse<Booking>>(environment.bookings.updateBookingById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

}
