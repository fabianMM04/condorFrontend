
import { Component, OnInit, DoCheck } from '@angular/core';
import {Youtube} from '../models/search';
import { SearchService } from '../services/search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public youtube: Youtube;
  public res : String;
  trustedDashboardUrl : SafeUrl;
  private dataLis =[];
  public json;
  public url;
  public variable;
 public video;
  public id: SafeResourceUrl;

  constructor(
  
    private _route: ActivatedRoute,
    private _router: Router,
    private _searchService: SearchService,
   
  ) { 
    this.youtube = new Youtube('');

  }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.dataLis);

  }


  onSubmit(){
this.video="i0NZqfUjKws";

    this._searchService.youtubeView(this.youtube.name).subscribe(
        response=>{
        
         console.log(response);
         this.dataLis = response.items;
          this.res = JSON.stringify(response);
         
        }, 
        error =>{
          console.log(<any>error);
        }
    );

  }
}
