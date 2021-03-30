import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { FavServiceService } from '../Services/fav-service.service';
import { PlayerService } from '../Services/player.service';

@Component({
  selector: 'app-favorite-players',
  templateUrl: './favorite-players.component.html',
  styleUrls: ['./favorite-players.component.css']
})
export class FavoritePlayersComponent implements OnInit {

  players:any=[]
  user:any=''
  ngOnInit(): void {
    this.user=localStorage.getItem("username")
    // console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")==null){
     
      this.router.navigate(["/login"]);
    }
    this.getFavPlayersList(localStorage.getItem("username"));
    
  }

  ngOnChanges(){
    this.getFavPlayersList(localStorage.getItem("username"))
  }

  constructor(private favService:FavServiceService,private router:Router, public dialog: MatDialog,
    private playerService:PlayerService){

  }


  getFavPlayersList(username:any){
    // let user=localStorage.getItem("username");
    // console.log(username)
    this.favService.getAllFavplayers(username).subscribe((res:any)=>{
      this.players.push(res)
     
    })
    // console.log(this.players[0])
  }


  openDialog(event: any) {
  
    // console.log(event)
    const dialogConfig2 = new MatDialogConfig();
  
    this.playerService.getInitPlayersStats(event.pid).subscribe((res)=>{
      // console.log("response")
      // console.log(res)
      dialogConfig2.data = {
        res
     };
    })
   
    console.log(dialogConfig2)
  
  const dialogRef = this.dialog.open(CourseDialogComponent,dialogConfig2);

  
  }

  delete(event:any){
    this.favService.delete(event,this.user).subscribe((res:any)=>{
      this.getFavPlayersList(this.user);
    })
  }
}
