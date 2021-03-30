import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService, USER_NAME } from '../userservice.service';
import { Router } from '@angular/router';
export const TOKEN_NAME = "token_name";
export const USERNAME="user_name"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private userservice: UserService,
     private router: Router) {
      this.user= new User();
     }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
}

gotohome(){
  this.router.navigate(["/dashboard"]);
}

  login() {
    console.log("User----->"+this.user.username);
    this.userservice.login(this.user).subscribe(data => {
      console.log("data--->"+data.toString);
      if (data) {
        localStorage.setItem(TOKEN_NAME,data["token"]);
        localStorage.setItem(USER_NAME,this.user.username)
        this.router.navigate(["/dashboard"]);
        this.refresh();
        this.router.navigate(["/dashboard"]);
      }
    },
      error => {
        if (error.status === 404) {
          const errorMsg = error.error.message;
          alert("Invalid Credentials")
        }
      }
    )
  }
}
