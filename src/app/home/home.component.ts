import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tempString='Directives use demo'
  highlightColor=''
  thirdInput='Selected color : '

  constructor() { }

  ngOnInit() {
  }

  changeHighLightColor(color){
    this.highlightColor = color;
    this.thirdInput += color;

  }

}
