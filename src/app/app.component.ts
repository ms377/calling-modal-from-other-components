import { Component } from '@angular/core';
// import { Modal01Component } from './shared/modal01/modal01.component';
import { Service01Service } from './shared/service01.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service01Service]
  
})
export class AppComponent {
  title = 'app';
  data;
  
  modaltrue:Boolean;
  constructor(
    private Service01Service: Service01Service
  ){}
  openModalNew(){
    this.Service01Service.putDataNew("new");
    this.modaltrue=true;
  }
  
}
