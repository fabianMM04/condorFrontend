import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
    public url: string;
    constructor(private http: HttpClient) { 
      this.url = GLOBAL.url;
  }


  //YOUTUBE
  youtubeView(word): Observable<any> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json',
   
            
    });

    return this.http.get(this.url+"&q="+ word + "&maxResults=5");

}
}
