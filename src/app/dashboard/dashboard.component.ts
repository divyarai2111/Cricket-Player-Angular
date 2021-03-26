import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PlayerIdModule } from '../Models/player-id/player-id.module';
import { PlayerService } from '../Services/player.service'
import { playerId } from '../Models/playerid'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errMessage: string = '';
  playerId: Array<playerId> | undefined;
  playerIdArray: Array<any> = []
  // notes: Note = new Note();
  // // noteList: Array<Note>;

  // notes: Note = new Note();
  // // noteList: Array<Note>;
  constructor(private playerService: PlayerService) {

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }




  ngOnInit() {
    this.getNotes()
  }



  getNotes() {


    this.playerService.getPlayers().subscribe((response) => {
      response.forEach((element: any) => {
        this.playerIdArray.push(element.pid)
        console.log(this.playerIdArray)
      });

      console.log(response)

    }, (err) => {
      console.log(err)
    }
    )
    // this.noteService.getNotes().subscribe((response) => {
    //   // console.log(response.reverse())
    //   if (response)
    //     this.noteList = response.reverse()
    //   else
    //     this.errMessage = "Not able to retrieve notes"
    // }, error => {
    //   console.log(error)
    //   this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found'
    //   return;
    // })
  }
}
