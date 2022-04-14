import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssignServiceRequest, CreateServiceRequest } from '../models/ServiceRequests';
import { GeneralResponse } from '../models/GeneralResponse';
import { map } from 'rxjs/operators';
import { Service, ServiceFilter } from '../models/Service';
import { GetServicesNameListReponse } from '../models/ServiceResponses';
import { UtilsService } from '../shared/services/utils.service';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  createService(body: CreateServiceRequest): Observable<GeneralResponse<Service>> {
    return this.http.post<GeneralResponse<Service>>(environment.services.createService, body)
      .pipe(
        map(result => result)
      );
  }

  getServicesNameList(): Observable<GeneralResponse<GetServicesNameListReponse[]>> {
    return this.http.get<GeneralResponse<GetServicesNameListReponse[]>>(environment.services.getServicesNameList)
      .pipe(
        map(result => result)
      );
  }

  assignService(body: AssignServiceRequest[]): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.services.assignService, body)
      .pipe(
        map(result => result)
      );
  }

  getServiceList(filter: ServiceFilter): Observable<GeneralResponse<Service[]>> {
    const params = this.utilsService.removeBlankItemsFromObject(filter);
    return this.http.get<GeneralResponse<Service[]>>(environment.services.getServiceList, {params: params})
      .pipe(
        map(result => result)
      );
  }

  updateServiceById(id: string, body: CreateServiceRequest): Observable<GeneralResponse<Service>> {
    return this.http.put<GeneralResponse<Service>>(environment.services.updateServiceById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  uploadServiceImage(body: FormData, id: string): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.services.uploadServiceImage.replace(':id', id), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  deleteServiceById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.services.deleteServiceById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }
}
