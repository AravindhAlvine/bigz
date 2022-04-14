import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  removeBlankItemsFromObject(object) {
    Object.keys(object).forEach(item => {
      if (object[item] == null || object[item] == '' || object[item] == undefined) {
        delete object[item];
      }
    })
    return object;
  }
}
