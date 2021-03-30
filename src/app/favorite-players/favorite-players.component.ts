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
  panelOpenState = false;
  players: any = []
  user: any = ''
  data: any;
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  ngOnInit(): void {
    this.user = localStorage.getItem("username")
    // console.log(localStorage.getItem("username"))
    if (localStorage.getItem("username") == null) {
      alert("Kindly login to open Fav player")
      this.router.navigate(["/login"]);
      return;
    }
    this.getFavPlayersList(localStorage.getItem("username"));

  }

  ngOnChanges() {
    this.getFavPlayersList(localStorage.getItem("username"))
  }

  constructor(private favService: FavServiceService, private router: Router, 
    public dialog: MatDialog,
    private playerService: PlayerService) {

  }


  getFavPlayersList(username: any) {
    // let user=localStorage.getItem("username");
    // console.log(username)
    this.players=[]
    this.favService.getAllFavplayers(username).subscribe((res: any) => {
     console.log(res)
      res.forEach((element:any) => {
        this.playerService.getInitPlayersStats(element.pid).subscribe((resp)=>{
          console.log(resp)
          this.players.push(resp)
        })
        // this.data=this.players
        
      });

     

    })
    // console.log(this.players[0])
  }

 

  openDialog(val: any) {

    // console.log(event)
    const dialogConfig2 = new MatDialogConfig();

    this.playerService.getInitPlayersStats(val.pid).subscribe((event) => {
      // console.log("response")
     let response=event;
     dialogConfig2.data = {
      event
    };
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig2);

     
    })


    // console.log(dialogConfig2.data.res)

   

  }

  delete(event: any) {
    this.favService.delete(event, this.user).subscribe((res: any) => {
      this.getFavPlayersList(this.user);
    },(err)=>{
      alert("Cannot delete")
    })
  }
}
