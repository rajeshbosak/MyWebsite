import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {


  private serverTestUrl = "http://localhost:3557/test";

  constructor(private http: HttpClient) { }

  testServer(){

   /*  let data = localStorage.getItem('auth_token');
      const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json',
                        'Authorization': ' 'JWT ' + data'
         })
    }; */

    return this.http.get(this.serverTestUrl,{responseType:'text' as 'json',});
  }

}
