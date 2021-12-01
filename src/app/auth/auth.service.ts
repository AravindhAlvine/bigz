import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignInRequest } from '../models/AuthRequests';
import { GeneralResponse } from '../models/GeneralResponse';
import { AuthResponse } from '../models/AuthResponses';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(body: SignInRequest): Observable<GeneralResponse<AuthResponse>> {
    return this.http.post<GeneralResponse<AuthResponse>>(environment.auth.adminSignin, body)
      .pipe(
        map(result => result)
      );
  }

  getAuthToken() {
    const token = sessionStorage.getItem('authToken');
    return token;
  }

  setAuthToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  removeAuthToken() {
    sessionStorage.removeItem('authToken');
  }

  isLoggedIn() {
    const authToken = this.getAuthToken();
    if (authToken)
      return true;
    else
      return false;
  }

  logout() {
    this.removeAuthToken();
    this.router.navigate(['/login']);
  }

}
