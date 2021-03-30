import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavServiceService } from '../Services/fav-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
// import { FavServiceService } from '../Services/fav-service.service';
import { PlayerService } from '../Services/player.service';
import { UpcomingMatchesService } from '../Services/upcoming-matches.service';



@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {

  matches: any = []
  matchDate :any=[]
  user: any = ''
  date:any=''
  ngOnInit(): void {
    // this.date="March 29,2021"
    this.upcomingMatchesService.getAllUpcomingMatches().subscribe((res)=>{
      this.matches.push(res.matches)
      this.matchDate.push(res.matches[0].date)
      console.log(this.matchDate)
    
    })

  }

 
  constructor(private upcomingMatchesService:UpcomingMatchesService) {

  }




 

  
   

}
