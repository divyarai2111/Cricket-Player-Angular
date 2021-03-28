import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_NAME } from './login/login.component';
import { Router } from '@angular/router';
import { User } from './Models/User';
export const USER_NAME = "username";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginEndPoint: string;
  registerEndPoint: string;
  username: string;
  constructor(private httpClient: HttpClient,  private router: Router) {
    this.loginEndPoint= 'http://localhost:8081/api/v1/userservice/login';
    this.registerEndPoint= 'http://localhost:8081/api/v1/userservice/register';
   }

  login(newUser:any): Observable<any>  {
    const url = this.loginEndPoint;
    sessionStorage.setItem(USER_NAME, newUser.username);
    return this.httpClient.post(url, newUser);
  }
  
  register(newUser:any) {
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

  
  //Token Storge

  setToken(token:any):void{
    console.log(token);
    
    localStorage.setItem('token', token);
  }

  getToken():any{
    console.log(localStorage.getItem("token"));
    
    return localStorage.getItem("token");
  }
  removeToken():void{
    localStorage.removeItem('token');
  }

  // authniticate my token

  authenticate(token:any){
    return this.httpClient.post<any>("http://localhost:8081",{},{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    }).toPromise();
    }



  
}
