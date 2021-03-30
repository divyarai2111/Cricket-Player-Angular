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
  user: any = ''
  ngOnInit(): void {
    this.upcomingMatchesService.getAllUpcomingMatches().subscribe((res)=>{
      this.matches.push(res.matches)
      console.log(this.matches[0])
    })

  }

 
  constructor(private upcomingMatchesService:UpcomingMatchesService) {

  }




 

  
   

}
