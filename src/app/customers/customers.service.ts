import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneralResponse } from '../models/GeneralResponse';
import { GetCustomerListResponse } from '../models/CustomerResponses';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomerList(limit?: number): Observable<GeneralResponse<GetCustomerListResponse[]>> {
    const url = limit ? `${environment.customers.getCustomerList}?limit=${limit}` : environment.customers.getCustomerList;
    return this.http.get<GeneralResponse<GetCustomerListResponse[]>>(url)
      .pipe(
        map(result => result)
      );
  }

  createCustomer(body: Customer): Observable<GeneralResponse<Customer>> {
    return this.http.post<GeneralResponse<Customer>>(environment.customers.createCustomer, body)
      .pipe(
        map(result => result)
      );
  }

  updateCustomerById(id: string, body: Customer): Observable<GeneralResponse<Customer>> {
    return this.http.put<GeneralResponse<Customer>>(environment.customers.updateCustomerById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  deleteCustomerById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.customers.deleteCustomerById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }
}
