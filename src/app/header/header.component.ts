import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
// import { IgxNavigationDrawerComponent } from "-angular";
import * as Hammer from "hammerjs"; 

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

    this.user=localStorage.getItem("username")
    // console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")!=null){
      this.user=localStorage.getItem("username")
     this.userlogin=true
    }
    
  }

  ngDoCheck(){
    this.user=localStorage.getItem("username")

    if(localStorage.getItem("username")!=null){
      this.userlogin=true
     }else
     this.userlogin=false
  }


  ngOnChanges(){
    this.user=localStorage.getItem("username")
   
  }

  ngAfterViewInit(){
    this.user=localStorage.getItem("username")
  }
  logout(){
    this.userlogin=false
    this.user=localStorage.getItem("username")
    localStorage.clear();


  }
  appname(){
    
    this.router.navigate([""]);
  }
  refresh(): void {
    this.userlogin=false
    window.location.reload();
}

}
