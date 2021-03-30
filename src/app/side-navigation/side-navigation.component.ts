import { Component, HostBinding, OnInit } from '@angular/core';
import { USER_NAME } from '../userservice.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  constructor() { }
  user:any=''
  showuser:boolean=false;
  ngOnInit(): void {

    if(localStorage.getItem("username")!=null){
     this.showuser=true
    //  console.log(this.showuser)

      this.user=localStorage.getItem("username")
    }

  }

  ngDoCheck(){
    if(localStorage.getItem("username")!=null){
      this.showuser=true
      // console.log(this.showuser)
       this.user=localStorage.getItem("username")
     }

  }

  isUser(){
    return this.showuser
  }

  ngOnChanges(){
    if(localStorage.getItem("username")!=null){
      this.showuser=true
      // console.log(this.showuser)
       this.user=localStorage.getItem("username")
     }

  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    localStorage.removeItem(USER_NAME);
    this.showuser=false;
   
}
refresh(): void {
  window.location.reload();
}

  @HostBinding('class.expanded') expanded: boolean = false;

}
