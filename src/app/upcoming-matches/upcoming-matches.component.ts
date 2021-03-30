import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavServiceService } from '../Services/fav-service.service';



@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {

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
