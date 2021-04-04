import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { UserService, USER_NAME } from '../userservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
export const TOKEN_NAME = "token_name";
export const USERNAME = "user_name"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private userservice: UserService,
    private router: Router,
    public dialog: MatDialog) {
    this.user = new User();
  }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
  }

  gotohome() {
    this.router.navigate(["/dashboard"]);
  }

  login() {
    console.log("User----->" + this.user.username);

    if(this.user.username=='' && this.user.password==''){
    
      let event = "Username and password cannot be blank";

      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event,
        route: "/login"
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      this.router.navigate(["/login"]);
      return;

    }

    else{
      let userObj={
        "username":this.user.username,
        "password":this.user.password
      }
    this.userservice.login(userObj).subscribe(data => {
      console.log( data);
      if (data) {
        localStorage.setItem(TOKEN_NAME, data["token"]);
        localStorage.setItem(USER_NAME, this.user.username)
      
        this.refresh();
        this.router.navigate(["/dashboard"]);
      }
    },
      error => {
        if (error.status === 404) {
          const errorMsg = error.error.message;
          let event = "Invalid Credentials";
  
          const dialogConfig = new MatDialogConfig();
          dialogConfig.data = {
            event: event
          };

          const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
          this.router.navigate(["/login"]);

          // alert("Invalid Credentials")
        }
      }
    )}
  }
}
