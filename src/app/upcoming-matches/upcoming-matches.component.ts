import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavServiceService } from '../Services/fav-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
// import { FavServiceService } from '../Services/fav-service.service';
import { PlayerService } from '../Services/player.service';
import { UpcomingMatchesService } from '../Services/upcoming-matches.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { element } from 'protractor';
import { CommonDialogComponent } from '../common-dialog/common-dialog.component';



@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {

  matches: any = []
  matchDate: any = []
  user: any = ''
  date: any = ''
  model: { date: any; team1: any; team2: any; matchStarted: any; };
  ngOnInit(): void {
    // this.date="March 29,2021"

    if (localStorage.getItem("username") == null) {
      let event = "Kindly login to view Upcoming Matches";
  
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        event: event
      };

      const dialogRef = this.dialog.open(CommonDialogComponent, dialogConfig);
      // alert("Kindly Login to View Info")
      this.router.navigate(["/login"]);
      return;
    }

    
    this.upcomingMatchesService.getAllUpcomingMatches().subscribe((res) => {

      
      res.matches.forEach((element2: any) => {
        let model = {
          "date": element2.date,
          "team1": element2["team-1"],
          "team2": element2["team-2"],
          "matchStarted":  element2.matchStarted,
          "toss_winner_team":element2.toss_winner_team
        }
        // console.log(element2)
        // this.model.date = 
        // this.model.team1 = 
        // this.model.team2 = 
        // this.model.matchStarted =
        this.matchDate.push(element2.date)
        this.matches.push(model)
        console.log(this.matches)
      });
      // this.matches.push(res.matches)
      // console.log(res.matches[0].date)


    })

    console.log(this.matches)
  }


  constructor(private upcomingMatchesService: UpcomingMatchesService, private router: Router,private dialog:MatDialog) {

  }









}
