import { Component, OnInit, DoCheck } from '@angular/core';
import { Service01Service } from '../shared/service01.service';
import { Modal01Component } from '../modal01/modal01.component';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-main-c',
  templateUrl: './main-c.component.html',
  styleUrls: ['./main-c.component.css']
})
export class MainCComponent implements OnInit {
  private d = new BehaviorSubject<any>(null);
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  md = false;
  data;
  user;
  arr=[1,2,3];
  newData:any;
  constructor(
    private Service01Service: Service01Service
  ) { }

  pusharr(){
    this.arr.push(4);
    console.log(this.arr)
  }
  unshift(){
    this.arr.unshift(0);
    console.log(this.arr)
    console.log(this.arr.indexOf(2))
  }
  poparr(){
    this.arr.pop();
    console.log(this.arr)
  }
  shiftarr(){
    this.arr.shift();
    console.log(this.arr)
  }
  ngOnInit() {
    this.data = this.Service01Service.data;
    this.move();
    console.log('Main c init');
    this.d.asObservable().subscribe((data) => console.log(">>> data >>>", data));
  }
  modal(j) {
    // this.newData.index=j;
    // this.newData.delete=false;
    // this.md = this.Service01Service.putDataNew(this.newData);
    this.md = this.Service01Service.putDataNew(j);
  }
  delete(j){
    this.newData.index=j;
    this.newData.delete=true;
    this.md = this.Service01Service.putDataNew(this.newData);
  }
  move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
  fireObs() {
    this.d.next('hii');
  }
}
