import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Models/User';
import { TOKEN_NAME } from './login/login.component';
import { Observable } from 'rxjs';
import { ContentObserver } from '@angular/cdk/observers';
export const USER_NAME = "username";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  loginEndPoint: string;
  registerEndPoint: string;



  constructor(private httpClient: HttpClient, private router: Router, public http:HttpClient) {
    this.loginEndPoint= 'http://localhost:8081/api/v1/userservice/login';
    this.registerEndPoint= 'http://localhost:8081/api/v1/userservice/register';
   }

  // loginUser(newUser:any) {
  //   const url = this.loginEndPoint;
  //   sessionStorage.setItem(USER_NAME, newUser.username);
  //   return this.httpClient.post(url, newUser);
  // }
  public loginUser(username: string,password: string):Observable<any> {
    console.log("login working");
    return this.http.request('GET','http://localhost:8082/login/'+username+'/'+password,{responseType:'text'});
    //return this.http.get<string>('http://localhost:8082/login/'+username+'/'+password);
  }
  
  registerUser(newUser:any) {
    const url = this.registerEndPoint;
    return this.httpClient.post(url, newUser);
  }

  logout() {
    sessionStorage.removeItem(USER_NAME);
    sessionStorage.clear();
    localStorage.removeItem("token_name");
    localStorage.clear();
    console.log("logged out");
  }


}
