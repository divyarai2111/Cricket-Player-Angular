import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string | null;

  constructor(private router:Router) { }

  userlogin:boolean=false;
  ngOnInit(): void {
    // console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")!=null){
      this.user=localStorage.getItem("username")
     this.userlogin=true
    }
    
  }

  ngDoCheck(){
    if(localStorage.getItem("username")!=null){
      this.userlogin=true
     }else
     this.userlogin=false
  }


  ngOnChanges(){
    // if(localStorage.getItem("username")!=null){
    //   this.userlogin=true
    //  }else
    //  this.userlogin=false
  }

  logout(){
    this.userlogin=false
    this.user=localStorage.getItem("username")
    localStorage.clear();


  }
  appname(){
    
    this.router.navigate([""]);
  }

}
