import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private localUrl: string
  private apikey: string = "uppjdjvssscHrYNYfIzTHCJPdhP2";
  private findbyPlayerNameApi = "https://cricapi.com/api/playerFinder";
  private findStatsbyPlayerId="https://cricapi.com/api/playerStats";
  playerAdd: any
  constructor(private httpClient: HttpClient) {
    this.localUrl = 'http://localhost:8082/api/v1/player/'
  
  }


  getPlayers(): Observable<any> {
    return this.httpClient.get(this.localUrl)

  }

  getInitPlayer(): Observable<any> {

    let params = new HttpParams();
    params = params.append('apikey', this.apikey);
    params = params.append('name', ' Jhye Richardson');
  return this.httpClient.get(this.findbyPlayerNameApi, {params: params})
  return new Observable<any>()

  }


  getInitPlayersStats(playerId:any):Observable<any>{
    // console.log(playerId)

    let params = new HttpParams();
    params = params.append('apikey', this.apikey);
    params = params.append('pid', playerId);

    return this.httpClient.get(this.findStatsbyPlayerId, {params: params})
  //  playerId.forEach((element:any)=>{
  //    console.log(element)
  //  })

    return new Observable<any>();
  }


  addInitPlayersStats(Player:any):Observable<any>{
    let playerAdd:any;
    // console.log(Player)
    if(Player.pid!=null){
      // console.log(Player)
    this.playerAdd={
      
      "pid": Player.pid,
      "name": Player.name,
      "profile": Player.profile,
      "imageURL": Player.imageURL,
      "battingStyle": Player.battingStyle,
      "bowlingStyle": Player.bowlingStyle,
      "majorTeams":Player.majorTeams,
      "data":[{
      "battingdata": [
              {"t20s":Player.data.batting.T20Is==undefined?"undefined": Player.data.batting.T20Is.Runs,
              "odis":Player.data.batting.ODIs==undefined?"undefined": Player.data.batting.ODIs.Runs,
              "test": Player.data.batting.tests==undefined?"undefined":Player.data.batting.tests.Runs
              }
      ]             
      ,
      "bowlingdata": [{
             "t20s": Player.data.bowling.T20Is==undefined?"undefined" :Player.data.bowling.T20Is.Runs,
              "odis": Player.data.bowling.ODIs==undefined?"undefined"  :Player.data.bowling.ODIs.Runs,
              "test": Player.data.bowling.tests==undefined?"undefined" : Player.data.bowling.tests.Runs
          
      }]
      }]
    }}
    // console.log(this.playerAdd)
 
    return this.httpClient.post(this.localUrl,this.playerAdd)
    // return new Observable<any>();

  }



  getPlayersDisplayed():Observable<any>{
    return this.httpClient.get(this.localUrl)
    // return new Observable<any>()
  }


 

  getPlayerbyNameSearch(searchKey:string):Observable<any>{
    // return this.httpClient.post(this.localUrl+searchKey,'');
    let params = new HttpParams();
    params = params.append('apikey', this.apikey);
    params = params.append('name', searchKey);

    return this.httpClient.get(this.findbyPlayerNameApi, {params: params})

    // https://cricapi.com/api/playerFinder?apikey=uppjdjvssscHrYNYfIzTHCJPdhP2&name=Tendulkar
    return new Observable<any>();
  }




}
