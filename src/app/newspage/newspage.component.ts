import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { New } from '../new';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent {
  constructor(public dialogRef: MatDialogRef<NewspageComponent>, 
    @Inject(MAT_DIALOG_DATA) public _new: New, 
  private dataService: DataService) {

  }

  getImage(filename: string){
    return this.dataService.getImagePath()+'?fileName='+filename;
  }
}
