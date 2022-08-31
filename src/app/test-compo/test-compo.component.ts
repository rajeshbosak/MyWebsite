import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.scss']
})
export class TestCompoComponent implements OnInit {

  // filteredOptions:Observable<string[]>;
  filteredOptions:string[]=[];

  existingOptions:string[]=[
    'one','two','three','four',
    'five','six','seven','eight',
    'nine','ten','orange',
    'twelve','thirteen','fourteen',
    'nest','apple'
  ]

  inputValue:string;
  hello:string;

  // myInputControl = new FormControl();

  constructor() { }

  ngOnInit(): void {

    // this.filteredOptions = this.myInputControl.valueChanges.pipe();
  }

  optionSelected(option){
    console.log({option})
  }

  inputValueChanged(inp){
    console.log("keyup pressed")
    console.log('inputValueChanged ')
    console.log({inp})
    this.inputValue = inp
    console.log(this.inputValue)

    if(inp==''){
      this.filteredOptions=[]
    }

    if(!inp || inp=='')
      return
    
    console.log("input length  : : ", inp.length)

    if(inp.length > 0 && inp[0] == '@'){
      // console.log(' substring: ', inp.substring(1))
      inp = inp.substring(1)
      if(inp==''){
        this.filteredOptions=[]
        return
      }
      this.filteredOptions = this.filter(inp) 
    }
  }

  filter(value:string){
    const filterValue = value.toLowerCase();
    return this.existingOptions.filter(option => option.toLowerCase().startsWith(filterValue))
  }

  helloFunc(){
    console.log('fldj')
    console.log(this.hello)
  }

}
