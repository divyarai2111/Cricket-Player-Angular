import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  val: boolean = false;
  passInvalid = false;
  passInvalidMessgage = ''
  submitted = false

  registerForm: FormGroup;
  // formBuilder: any;
  constructor(private service: UserService, private router: Router, public dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.user = new User();


  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  invalidPassword() {

  }

  checkPassword() {


    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
    const valid = regex.test(this.registerForm.value["password"]);

    this.passInvalid = valid ? false : true;
    // valid ? { passInvalid: false } : { passInvalid: true };
    // this.passInvalid=true;
    // this.passInvalidMessgage="Password should contain at least 1 uppercase letter, 1 lowercase    letter and 1 number"
  }

  passwordNotSame() {



    if (this.registerForm.value["confirmPassword"] !== this.registerForm.value["password"])
      this.val = true;
    else
      this.val = false;


    // return this.val
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    // console.log(this.registerFormControl)
    console.log(this.registerForm.valid)
    // return;
    // console.log();
    if (!this.registerForm.valid) {


      let event = "Enter valid details";
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event,
        route: "/register"
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      return;

    }



    if (this.registerForm.value["username"] == '' && this.registerForm.value["password"] == '' && this.registerForm.value["confirmPassword"] == '' && this.registerForm.value["email"] == '') {
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
    if(this.passInvalid==true){
      let event = "Password is not strong.";
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event,
        route: "/register"
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      return;
      
    }
    else
      if (this.registerForm.value["confirmPassword"] != this.registerForm.value["password"]) {
        let event = "Password do not match";
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          event: event
        };

        const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      }
      else {
        let user = {
          "email": (this.registerForm.value["email"]),
          "username": (this.registerForm.value["username"]),
          "password": (this.registerForm.value["password"])
        }
        this.service.register(user)
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
function MustMatch(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

