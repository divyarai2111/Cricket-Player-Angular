import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: User;
  constructor(private service : UserserviceService ,private router: Router) {
    this.user = new User();

   }


  ngOnInit(){
  }
  register() {
    console.log(this.user);
    this.service.registerUser(this.user)
      .subscribe(data => {
        this.router.navigate(["/login"]);

      },
        error => {
          console.log(error);
        })
  }







}
