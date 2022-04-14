import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Booking, BookingFilter } from '../models/Booking';
import { GeneralResponse } from '../models/GeneralResponse';
import { UtilsService } from '../shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  getBookingList(filter: BookingFilter): Observable<GeneralResponse<Booking[]>> {
    const params = this.utilsService.removeBlankItemsFromObject(filter);
    return this.http.get<GeneralResponse<Booking[]>>(environment.bookings.getBookingList, {params: params})
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

  deleteVendorById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.vendors.deleteVendorById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

}
