import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavServiceService {

  private localUrl="http://localhost:8083/api/v1/favoriteservice/"
  constructor(private httpClient:HttpClient) { 

  }
  private favPlayer:any;

  getfavoritePlayer(){
    return this.favPlayer
  }


  setfavoritePlayer(favPlayer :any){
    this.favPlayer=favPlayer
    this.addFavoritePlayer(this.favPlayer,"Divya").subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }

  addFavoritePlayer(Player:any,user:any):Observable<any>{
    console.log("i fav servcie",Player)
    let player={
      "fullName":"divya",
      "name":"yuvi",
      "pid":2

    }

    return this.httpClient.post(this.localUrl+"user/"+"Divya/player",player);
    
  }

}
