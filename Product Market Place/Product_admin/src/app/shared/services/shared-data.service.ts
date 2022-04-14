import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public dataDetails: any = {};
  public subject = new Subject<any>();
  private dataSource = new BehaviorSubject(this.dataDetails);
  currentData = this.dataSource.asObservable();

  setData(field: string, value: any) {
    this.dataSource.next({ [field]: value });
  }
}
