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
    console.log("i fav servcie")
    console.log(Player)
    let player={
      "fullName":Player.name,
      "name":Player.name,
      "pid":(String)(Player.pid)

    }

    return this.httpClient.post(this.localUrl+"user/"+user+"/player",player);
    // return new Observable<any>();
    
  }


  delete(player:any,user:any){
    let delPlayer={
      "pid": player.pid,
      "name":player.name,
      "fullName": player.name
    }
    return this.httpClient.delete(this.localUrl+"user/"+user+"/player/"+player.pid);
    // return this.httpClient.post(r)
  }

  getAllFavplayers(user:string){
    return this.httpClient.get(this.localUrl+"user/"+user+"/player");
  }
}
