import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from './register-user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(private registerUserService : RegisterUserService) { }

  ngOnInit() {
  }


  testMethod(){
    console.log("In  Angular Test Method");

    var response;
    var errorMessage;

    let resServ = this.registerUserService.testServer().subscribe(
      res =>{
        console.log("Response recieved  : " + res );
        response = res;
        console.log("Response : " + response);
      },
      error=>{
        // console.log(error)
        console.log("Error Recieved ");
        errorMessage = error;
      }
    );


    // let resServ = this.registerUserService.testServer();

    console.log(resServ);

    if(errorMessage ){
      console.log("Error ");
      console.log(errorMessage);
    }else{
      console.log(response);
    }

  }

}
