import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
@Injectable()
export class Service01Service {
  public data=[];
  public index=20;
  public obj:any;
  // flag01: BehaviorSubject<Boolian> = new BehaviorSubject<Boolean>(false);
  // public flag02 = new BehaviorSubject<Boolean>(null);
  public flag03 = new BehaviorSubject<Number>(null);
  public flag04 = new BehaviorSubject<any>(null);
  
  constructor() {
   }
  getdata() {
    return this.data;
  }
  putData(data) {
    this.data.push(data);
  }
  putDataNew(index) {
    // this.index = index;
    this.flag03.next(index);
    return true;
  }
  deleteData(data){
    this.flag03.next(data);
  }
  editData(data){
    this.flag03.asObservable().subscribe((data:number) => this.index = data);
    this.data[this.index] = data;
    // this.index=-1;
    this.flag03.next(-1);
    
  }
}
