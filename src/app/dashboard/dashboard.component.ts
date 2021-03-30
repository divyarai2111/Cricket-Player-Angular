import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { PlayerIdModule } from '../Models/player-id/player-id.module';
import { PlayerService } from '../Services/player.service'
import { playerId } from '../Models/playerid'
import { FormControl } from '@angular/forms';
import { FavoriteComponent } from '../favorite/favorite.component';
import { FavServiceService } from '../Services/fav-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  @ViewChild(FavoriteComponent) favComponent:FavoriteComponent | undefined
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Output() buttonClicked = new EventEmitter();
  error:boolean=false;
  imgsrc=''
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
  playerDisplayed :any=[];

  constructor(private playerService: PlayerService,
    private favService:FavServiceService,
    public dialog: MatDialog,
    private router:Router) {


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
    //getting player id by passing null as name
    this.playerService.getInitPlayer().subscribe((response) => {
      response.data.forEach((element: any) => {
        this.playerInit.push(element)

        //from that pid, call statistic function
        this.playerService.getInitPlayersStats(element.pid).subscribe((res) => {

          //add this statistic in my mongodb
          this.playerService.addInitPlayersStats(res).subscribe((re) => {
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
        if (element != undefined)
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

  toggleSelected(key:any,event:any) {
    // console.log(localStorage.getItem("username"))
    let username=localStorage.getItem("username");
    if(localStorage.getItem("username")==null){
      if(username==null){
        alert("Kindly login to add favorites")
        this.router.navigate(["/login"]);
  
      }
    
    }


    if(this.playerDisplayed[key].favourite==undefined){
      this.playerDisplayed[key].favourite=true;  
      this.favService.addFavoritePlayer(event,username).subscribe((res)=>{

      },(err)=>{
        alert("You have already added to fav list")
      })
     
           
    }
   
    else{
      if(this.playerDisplayed[key].favourite==true){
        this.playerDisplayed[key].favourite=false;
        this.favService.delete(event,username).subscribe((res)=>{

        },(err)=>{
          alert("You have already added to fav list")
        })
       
      }else

     {
      this.playerDisplayed[key].favourite=true;
      this.favService.addFavoritePlayer(event,username).subscribe((res)=>{

      },(err)=>{
        alert("You have already added to fav list")
      })
     } 
     
    }
   
  
  
  
   



  }
  public searchStr: string = "";


  updateUrl(event: any) {
    console.log("Image error")
    console.log(event)
    // this.error=true;
    this.imgsrc = "../../assets/images/dummy.jpg";
  }
  getSearchText(event: any) {
    // console.log(event.length)

    if (event.length >= 3) {
      this.playerDisplayed = [];
      this.playerService.getPlayerbyNameSearch(event).subscribe((res) => {
        res.data.forEach((element: any) => {
          this.playerService.getInitPlayersStats(element.pid).subscribe((res2) => {

            if (res2 != undefined) {
              console.log(res2)
              this.playerDisplayed.push(res2)

            }


          }, (err) => {
            console.log(":none");
          })

        });
      }

        // console.log(res)

        , (err) => {
          console.log(err)
        })
    }
  }



  openDialog(event: any) {
  
    // console.log(event)

    console.log(localStorage.getItem("username"))
    if(localStorage.getItem("username")==null){
      alert("Kindly Login to View Info")
      this.router.navigate(["/login"]);
      return;
    }


    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
     event
  };
  
  const dialogRef = this.dialog.open(CourseDialogComponent,dialogConfig);

  
  }


  
}


function ChildComponent(ChildComponent: any) {
  throw new Error('Function not implemented.');
}