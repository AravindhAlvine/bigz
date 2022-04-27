import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';
import { DefaultUrlSerializer } from '@angular/router';

@Injectable()
export class HomeService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private config: Configuration) { }

  getCategoryList() {
    const serializer = new DefaultUrlSerializer();
    const paramSerializer = serializer.parse('');
    return this.http.get(this.config.ListofMenu);
  }

  // getMenuList() {
  //   debugger;
  //   const serializer = new DefaultUrlSerializer();
  //   const paramSerializer = serializer.parse('');
  //   // const params = serializer.serialize(paramSerializer);
  //   return this.http.get(this.config.ListofMenu);
  // }

  
  // saveClient(userInput, usertoken) {
  //   // debugger;
  //   const serializer = new DefaultUrlSerializer();
  //   const paramSerializer = serializer.parse('');
  //   paramSerializer.queryParams = usertoken;
  //   const params = serializer.serialize(paramSerializer);
  //   return this.http.post(this.config.getClients + params, JSON.stringify(userInput), this.httpOptions);
  // }


}