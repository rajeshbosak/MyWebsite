import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tempString='Directives use demo'
  highlightColor=''
  thirdInput='Selected color : '

  angularVersion:any;

  constructor() { 
    this.angularVersion = VERSION.full
  }

  ngOnInit() {
  }

  changeHighLightColor(color){
    this.highlightColor = color;
    this.thirdInput += color;

  }

}
