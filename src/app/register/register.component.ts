import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { User } from '../Models/User';
import { UserService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  val: boolean=true;
  constructor(private service: UserService, private router: Router, public dialog: MatDialog,) {
    this.user = new User();

  }


  ngOnInit() {
  }

  invalidPassword(){
    
  }
 
  passwordNotSame() {
   

    if (this.user.password !== this.user.password2)
      this.val= true;
    else
      this.val= false;
      console.log(this.user.password)
      console.log(this.user.password2)
      console.log(this.val)

      // return this.val
  }
  register(registerForm:any) {
    console.log();
    if(!registerForm.valid){


      let event = "Enter valid details";
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event,
        route: "/register"
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      return;

    }



    if (this.user.email == '' && this.user.password == '' && this.user.username == '' && this.user.password2 == '') {
      let event = "Fields should not be blank";
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event,
        route: "/register"
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      return;
    }
    else
      if (this.user.password != this.user.password2) {
        let event = "Password do not match";
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          event: event
        };

        const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      }
      else {
        this.service.register(this.user)
          .subscribe(data => {
            // this.router.navigate(["/login"]);
            let event = "Registration Successful";
            const dialogConfig = new MatDialogConfig();
            dialogConfig.data = {
              event: event,
              route: "/login"
            };

            const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);

          },
            error => {
              let event = "Username already exists";
              const dialogConfig = new MatDialogConfig();
              dialogConfig.data = {
                event: event
              };

              const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);

            })
      }
  }







}
