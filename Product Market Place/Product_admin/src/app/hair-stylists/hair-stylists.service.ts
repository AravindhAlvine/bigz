import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneralResponse } from '../models/GeneralResponse';
import { map } from 'rxjs/operators';
import { GetCategoryListResponse } from '../models/CategoryResponses';
import { Vendor } from '../models/Vendor';
import { GetVendorListResponse, GetVendorsStoreNameListReponse } from '../models/VendorResponses';
import { GenerateSlugRequest } from '../models/GenerateSlugRequest';
import { GenerateSlugResponse } from '../models/GenerateSlugResponse';
import { UtilsService } from '../shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class HairStylistsService {

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  getCategoryList(): Observable<GeneralResponse<GetCategoryListResponse[]>> {
    return this.http.get<GeneralResponse<GetCategoryListResponse[]>>(environment.categories.getCategoryList)
      .pipe(
        map(result => result)
      );
  }

  uploadAssets(body: FormData, vendorId: string): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.vendors.uploadAssets.replace(':id', vendorId), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  createVendor(body: Vendor): Observable<GeneralResponse<Vendor>> {
    return this.http.post<GeneralResponse<Vendor>>(environment.vendors.createVendor, body)
      .pipe(
        map(result => result)
      );
  }

  getVendorsStoreNameList(): Observable<GeneralResponse<GetVendorsStoreNameListReponse[]>> {
    return this.http.get<GeneralResponse<GetVendorsStoreNameListReponse[]>>(environment.vendors.getVendorsStoreNameList)
      .pipe(
        map(result => result)
      );
  }

  getVendorList(filter): Observable<GeneralResponse<GetVendorListResponse[]>> {
    // const url = limit ? `${environment.vendors.getVendorList}?limit=${limit}` : environment.vendors.getVendorList;
    const params = this.utilsService.removeBlankItemsFromObject(filter);
    return this.http.get<GeneralResponse<GetVendorListResponse[]>>(environment.vendors.getVendorList, {params: params})
      .pipe(
        map(result => result)
      );
  }

  getVendorDetails(id: string): Observable<GeneralResponse<Vendor>> {
    return this.http.get<GeneralResponse<Vendor>>(environment.vendors.getVendorDetails.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  updateVendorById(id: string, body: Vendor): Observable<GeneralResponse<Vendor>> {
    return this.http.put<GeneralResponse<Vendor>>(environment.vendors.updateVendorById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  deleteUploadedImage(path: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(path, { headers: { skip_interceptor: "true" } })
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

  getHairstylistStaticData(): Observable<any> {
    return this.http.get<any>(environment.vendorStaticData).pipe(
      map(result => result)
    );
  }

  approveVendorById(id: string): Observable<GeneralResponse<Vendor>> {
    return this.http.put<GeneralResponse<Vendor>>(environment.vendors.approveVendorById.replace(':id', id), null)
      .pipe(
        map(result => result)
      );
  }

  generateSlug(body: GenerateSlugRequest): Observable<GeneralResponse<GenerateSlugResponse>> {
    return this.http.post<GeneralResponse<GenerateSlugResponse>>(environment.vendors.generateSlug, body)
      .pipe(
        map(result => result)
      );
  }
}
