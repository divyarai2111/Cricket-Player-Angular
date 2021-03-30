import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMatchesService {
  findUpcomingMatches:string=''
  private apikey: string = "uppjdjvssscHrYNYfIzTHCJPdhP2";
  constructor(private httpClient: HttpClient) {
    this.findUpcomingMatches = 'https://cricapi.com/api/matches'
  
  }

  getAllUpcomingMatches():Observable<any>{
    let params = new HttpParams();
    params = params.append('apikey', this.apikey);
    return this.httpClient.get(this.findUpcomingMatches, {params: params})

  }
}
