import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {New} from 'src/app/new';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'https://localhost:7032/NewsApi/'
  _getAllPath = this.apiUrl+'GetAll/';
  _getImagePath = this.apiUrl+'GetImage/';
  _getPath = this.apiUrl+'Get/'
  constructor(private httpClient: HttpClient) {

   }

   public getAll(){
    return this.httpClient.get<New[]>(this._getAllPath);
   }
   public get(id: number){
    return this.httpClient.get<New>(this._getPath+'/'+id);
   }
   public getImagePath(){
    return this._getImagePath;
   }
}
