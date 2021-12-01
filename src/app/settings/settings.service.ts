import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GeneralResponse } from '../models/GeneralResponse';
import { SaveGeneralSettingsRequest } from '../models/SettingsRequests';
import { SaveGeneralSettingsResponse } from '../models/SettingsResponse';
import { User } from '../models/User';
import { UserRole, SaveMenuAccessRequest } from '../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient
  ) { }
  
  saveGeneralSettings(id:string, body: SaveGeneralSettingsRequest): Observable<GeneralResponse<SaveGeneralSettingsResponse>> {
    return this.http.put<GeneralResponse<SaveGeneralSettingsResponse>>(environment.settings.saveGeneralSettings.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }
  
  uploadStoreAssets(body: FormData, id: string): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.settings.uploadStoreAssets.replace(':id', id), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  createUserRole(body: UserRole): Observable<GeneralResponse<UserRole>> {
    return this.http.post<GeneralResponse<UserRole>>(environment.userRoles.createRole, body)
      .pipe(
        map(result => result)
      );
  }

  getUserRoles(): Observable<GeneralResponse<UserRole[]>> {
    return this.http.get<GeneralResponse<UserRole[]>>(environment.userRoles.getRoleList)
      .pipe(
        map(result => result)
      );
  }

  updateRoleDetailsById(id: string, body: SaveMenuAccessRequest): Observable<GeneralResponse<UserRole>> {
    return this.http.put<GeneralResponse<UserRole>>(environment.userRoles.updateRoledetailsById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  getUserRoleDetailsById(id: string): Observable<GeneralResponse<UserRole>> {
    return this.http.get<GeneralResponse<UserRole>>(environment.userRoles.getRoleDetailsById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  getUserDetailsById(id: string): Observable<GeneralResponse<User>> {
    return this.http.get<GeneralResponse<User>>(environment.users.getUserById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  deleteRoleById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.userRoles.deleteRoleById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  createUser(body: User): Observable<GeneralResponse<User>> {
    return this.http.post<GeneralResponse<User>>(environment.users.createUser, body)
      .pipe(
        map(result => result)
      );
  }

  getUserList(): Observable<GeneralResponse<User[]>> {
    return this.http.get<GeneralResponse<User[]>>(environment.users.getUserList)
      .pipe(
        map(result => result)
      );
  }

  updateUserDetailsById(id: string, body: User): Observable<GeneralResponse<User>> {
    return this.http.put<GeneralResponse<User>>(environment.users.updateUserById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  deleteUserById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.users.deleteUserById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  getUserMenu(): Observable<GeneralResponse<string>> {
    return this.http.get<GeneralResponse<string>>(environment.users.getMyMenu)
      .pipe(
        map(result => result)
      );
  }

  getGeneralSettingDetails(): Observable<GeneralResponse<SaveGeneralSettingsResponse>> {
    return this.http.get<GeneralResponse<SaveGeneralSettingsResponse>>(environment.settings.getGeneralSettingDetails)
      .pipe(
        map(result => result)
      );
  }
}
