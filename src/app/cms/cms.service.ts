import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetCustomerListResponse } from '../models/CustomerResponses';
import { GeneralResponse } from '../models/GeneralResponse';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(
    private http: HttpClient
  ) { }

  savePageDetails(id: string, body: any): Observable<GeneralResponse<any>> {
    // const url = id ? `${environment.cms.savePage}?id=${id}` : environment.cms.savePage;
    return this.http.put<GeneralResponse<any>>(environment.cms.savePage.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  approvePageById(id: string): Observable<GeneralResponse<any>> {
    return this.http.put<GeneralResponse<any>>(environment.cms.approvePageById.replace(':id', id), null)
      .pipe(
        map(result => result)
      );
  }

  createPage(body: any): Observable<GeneralResponse<any>> {
    return this.http.post<GeneralResponse<any>>(environment.cms.createPage, body)
      .pipe(
        map(result => result)
      );
  }

  getPageList(): Observable<GeneralResponse<any[]>> {
    // const url = limit ? `${environment.customers.getCustomerList}?limit=${limit}` : environment.customers.getCustomerList;
    return this.http.get<GeneralResponse<any[]>>(environment.cms.getPageList)
      .pipe(
        map(result => result)
      );
  }

  deletePageById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.cms.deletePageDetailsById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  getPageDetailsById(id: string): Observable<GeneralResponse<any>> {
    return this.http.get<GeneralResponse<any>>(environment.cms.getPageDetailsById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  uploadAssets(body: FormData, pageId: string): Observable<GeneralResponse<null>> {    
    return this.http.post<GeneralResponse<null>>(environment.cms.uploadAssets.replace(':id', pageId), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  getHomePageDetails(): Observable<GeneralResponse<any>> {
    return this.http.get<GeneralResponse<any>>(environment.cms.getHomePageDetails)
      .pipe(
        map(result => result)
      );
  }

  getUploadBannerDetails(body): Observable<GeneralResponse<any>>  {
    return this.http.post<GeneralResponse<any>>(environment.cms.getUploadBannerDetails, body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  deleteBannerById(pageId, bannerId, body) : Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.cms.deleteBannerById.replace(':page_id', pageId).replace(':banner_id', bannerId), body)
      .pipe(
        map(result => result)
      );
  }

  deletePageBlockById(pageId: string, blockId: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.cms.deletePageBlockById.replace(':page_id', pageId).replace(':block_id', blockId))
      .pipe(
        map(result => result)
      );
  }

  deletePageBlockItemById(pageId: string, blockId: string, item: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.cms.deletePageBlockItemById.replace(':page_id', pageId).replace(':block_id', blockId).replace(':item', item))
      .pipe(
        map(result => result)
      );
  }
}
