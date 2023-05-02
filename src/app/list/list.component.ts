import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { New } from '../new';
import { NewspageComponent } from '../newspage/newspage.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public newsList: New[] = [];
  public constructor(public dataService: DataService, public dialog: MatDialog){
    dataService.getAll().subscribe(data =>{
      this.newsList = data;
      console.log(this.newsList);
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
