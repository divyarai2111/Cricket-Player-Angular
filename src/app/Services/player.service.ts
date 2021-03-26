import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private localUrl:string
  constructor(private httpClient: HttpClient) {
    this.localUrl='http://localhost:8082/api/v1/player/'
   }


  getPlayers():Observable<any>{
    return this.httpClient.get(this.localUrl)

  }
 
  

}
