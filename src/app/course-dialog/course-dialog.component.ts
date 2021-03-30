import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  description:any;
  constructor( private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) { 
     
      console.log(data)
      try{
        if(data.event!=undefined)
      this.description = data.event;

      }catch(e){
        if(data.res!=undefined)
        this.description = data.res;
      }
      
      
     
      console.log("In description")
      console.log(this.description)
     
    }

  ngOnInit(): void {
  }



close() {
    this.dialogRef.close();
}

}
