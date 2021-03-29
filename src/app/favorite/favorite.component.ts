import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { USERNAME } from '../login/login.component';
import { FavServiceService } from '../Services/fav-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  players:any=[]
  
  ngOnInit(): void {
  
    console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")==null){
      this.router.navigate(["/login"]);
    }
    this.getFavPlayersList(localStorage.getItem("username"));
    
  }

  ngOnChanges(){
    this.getFavPlayersList(localStorage.getItem("username"))
  }

  constructor(private favService:FavServiceService,private router:Router){

  }


  getFavPlayersList(username:any){
    // let user=localStorage.getItem("username");
    console.log(username)
    this.favService.getAllFavplayers(username).subscribe((res:any)=>{
      this.players.push(res)
     
    })
    console.log(this.players[0])
  }




}


