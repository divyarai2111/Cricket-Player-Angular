import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PlayerIdModule } from '../Models/player-id/player-id.module';
import { PlayerService } from '../Services/player.service'
import { playerId } from '../Models/playerid'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errMessage: string = '';
  playerId: Array<playerId> | undefined;
  playerIdArray: Array<any> = []
  playerInit: Array<any> = []
  // options:Array<any>=[]
  // notes: Note = new Note();
  // // noteList: Array<Note>;

  // notes: Note = new Note();
  // // noteList: Array<Note>;
  myControl = new FormControl();
  options: string[] = ['Cash', 'Credit Card', 'Paypal'];
  playerDisplayed: Array<any>=[];
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
    // this.getNotes()
    this.playerService.getInitPlayer()
    this.playerService.getInitPlayer().subscribe((response) => {
      response.data.forEach((element: any) => {
        this.playerInit.push(element)

        this.playerService.getInitPlayersStats(element.pid).subscribe((res) => {
         this.playerService.addInitPlayersStats(res).subscribe((re)=>{
           console.log(re)
         })
        })
        // console.log(element)
      });
      // console.log(response)
    }, (err) => {
      // console.log(err)
    })


    this.getAll()


  }



  getAll() {


    this.playerService.getPlayersDisplayed().subscribe((response) => {
      response.forEach((element: any) => {
        if(element!=undefined)
        this.playerDisplayed.push(element)
        console.log(element)
      });

      // console.log(response)

    }, (err) => {
      // console.log(err)
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
