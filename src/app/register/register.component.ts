import { Component, OnInit } from '@angular/core';
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
  constructor(private service : UserService ,private router: Router,public dialog: MatDialog,) {
    this.user = new User();

   }


  ngOnInit(){
  }
  register() {
    console.log(this.user);


    if(this.user.password!= this.user.password2){
      let event= "Password do not match";
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
       event: event
    };
    
    const dialogRef = this.dialog.open(CommonDialogComponent,dialogConfig);
    }
    else
    {
    this.service.register(this.user)
      .subscribe(data => {
        this.router.navigate(["/login"]);

      },
        error => {
          let event= "Registration Unsuccessful.Please try again";
          const dialogConfig = new MatDialogConfig();
          dialogConfig.data = {
           event: event
        };
        
        const dialogRef = this.dialog.open(CommonDialogComponent,dialogConfig);
      
        })
      }
  }







}
