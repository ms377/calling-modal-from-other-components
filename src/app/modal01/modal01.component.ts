import { Component, OnInit, DoCheck } from '@angular/core';
import { Service01Service } from '../shared/service01.service';
@Component({
  selector: 'app-modal01',
  templateUrl: './modal01.component.html',
  styleUrls: ['./modal01.component.css']
})
export class Modal01Component implements OnInit, DoCheck {
  data: any;
  index;
  m;
  name = '';
  edit: boolean = false;
  constructor(
    private service01Service: Service01Service
  ) {
    console.log(this.service01Service);
  }

  ngOnInit() {
    this.data = this.service01Service.getdata();
    this.service01Service.flag03.asObservable().subscribe((data) => {
      console.log(">>> data >>>", data);
      this.index = data;
      if (this.index > -1) {
        this.name = this.data[this.index];
        this.edit = true;
        console.log("_>>>>>>>>>>", this.name)
      }
    });
    // this.index = this.service01Service.index;
  }

  ngDoCheck(){}
  ngOnDestroy() {
    this.service01Service.flag03.unsubscribe();
  }

  save() {
    this.edit = false;
    if (this.index > -1) this.service01Service.editData(this.name);
    else this.service01Service.putData(this.name);
    this.name = '';

  }
}
