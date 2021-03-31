import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {


  description:any;
  dataInput: any;
  constructor( private dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,private route:Router) { 
      console.log(data)
      this.dataInput=data;
      this.description = data.event;
      // if(data.event!=null)
    }

  ngOnInit(): void {
  }



close() {

    console.log(this.dataInput.route!)
    if(this.dataInput.route!=undefined){
      let routeLink=this.dataInput.route;
      this.route.navigate([routeLink]);
    }
  
    this.dialogRef.close();
}

}
