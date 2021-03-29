import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { USERNAME } from '../login/login.component';
import { FavServiceService } from '../Services/fav-service.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  players:any=[]
  
  ngOnInit(): void {
  
    // console.log(localStorage.getItem("username"))
    this.getFavPlayersList(localStorage.getItem("username"));
    
  }

  constructor(private favService:FavServiceService){

  }


  getFavPlayersList(username:any){
    // let user=localStorage.getItem("username");
    // console.log(user)
    this.favService.getAllFavplayers(username).subscribe((res:any)=>{
      this.players.push(res)
      console.log(this.players)
    })
  }




}


