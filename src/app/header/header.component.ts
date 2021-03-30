import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  userlogin:boolean=false;
  ngOnInit(): void {
    // console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")!=null){
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
    localStorage.clear();
    

  }
  refresh(): void {
    window.location.reload();
}

}
