import { Component } from '@angular/core';
import { New } from '../new';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { NewspageComponent } from '../newspage/newspage.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public newsList: New[] = [];
  public sortList: New[] = [];
  constructor(public dataService: DataService, public router: Router, public dialog: MatDialog){
    dataService.getAll().subscribe(data =>{
      this.newsList = data;
      this.sortList = this.newsList.sort((a, b) =>
      a.date.getTime() - b.date.getTime());
    })

  }

createUrl(path: string){
  return "url('" + this.dataService.getImagePath()+"?fileName="+path+"')";
}

  open(news: New){
    this.dialog.open(NewspageComponent, {
      width: '90%',
      data: news
    })
  }
}
