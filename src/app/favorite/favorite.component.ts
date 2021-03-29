import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FavServiceService } from '../Services/fav-service.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  players:any=[]
  user=''
  ngOnInit(): void {

    this.getFavPlayersList();
    
  }

  constructor(private favService:FavServiceService){

  }


  getFavPlayersList(){
    this.favService.getAllFavplayers().subscribe((res:any)=>{
      this.players.push(res)
      console.log(this.players)
    })
  }




}


