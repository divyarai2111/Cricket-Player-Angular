import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserserviceService } from '../userservice.service';
export const TOKEN_NAME = "token_name";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  username:string;
  password:string;


  constructor(private router:Router, private userservice: UserserviceService) {
    this.user = new User();
   }

  ngOnInit(){}

  // login() {
  //   console.log("User----->"+this.user.username);
  //   this.userservice.loginUser(this.user.username, this.user.password).subscribe(data => {
  //     console.log("data--->"+data.toString);
  //     if (data) {
  //       localStorage.setItem(TOKEN_NAME, data);
  //       alert("logged in")
  //       this.router.navigate(["/dashboard"]);
  //     }
  //   },
  //     error => {
  //       if (error.status === 404) {
  //         const errorMsg = error.error.message;
  //       }
  //     }
  //   )
  // }
  login() {
  this.userservice.loginUser(this.user.username,this.user.password).subscribe(data=>{
    console.log("data--->"+data);
  if (data) {
    alert("Nice to Have You Back :)");
    localStorage.setItem(TOKEN_NAME, data);
    this.router.navigate(["/dashboard"]);
  }
  },(error)=>{
    console.log(error); 
    console.log("hello inside error block")
  }
  )
}

}
