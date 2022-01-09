import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private actroute: ActivatedRoute, private userv: UserserviceService, private route: Router,  private loc: Location) { }
  theme: string;
  data: any = [];
  moviename: any;
  ad:any = "";
  mid:any = [];
  media:any;
  id:any;
  ngOnInit() {
    this.userv.media.subscribe((val)=>{this.media = val})
    console.log(this.media)
    this.moviename = this.actroute.snapshot.params['movie'];
    this.ad= this.actroute.snapshot.params['ad'];
    if(this.ad == "false"){
      this.userv.search(this.moviename).subscribe((success)=>{
        this.data = success;
        console.log(this.data)
      },(err)=>{
        console.log(err)
      })
    }else{
      if(this.ad == "true"){
        this.userv.searchAd(this.moviename).subscribe((success)=>{
          this.data = success;
          console.log("ad",this.data)
        },(err)=>{
          console.log(err)
        })
      }else{
        if(this.loc.path().substring(0,9) == "/showcast"){
          this.id = this.actroute.snapshot.params["id"]
          console.log(this.id)
          if(this.media == "tv"){
            this.userv.getTvCast(this.id).subscribe((success)=>{this.data = success; console.log("tv",this.data)})
          }else{
            this.userv.getMovieCast(this.id).subscribe((success)=>{this.data = success; console.log("m",this.data)})
          }
        }
        if(this.loc.path().substring(0,9) == "/showsimi"){
          this.actroute.queryParams.subscribe((val)=>{this.mid = val})
          console.log("similar",this.mid)
        
        
          if(this.media == "tv"){
            this.userv.getSimilarShows(this.mid.id).subscribe((success)=>{this.data = success;console.log("tv",this.data)})
          
          }else{
            this.userv.getSimilarMovies(this.mid.id).subscribe((success)=>{this.data = success;console.log("m",this.data)})
         }
        }
        

      }
    }
    this.userv.changeT.subscribe((val)=>{this.theme = val})
    
    // console.log(this.loc.path())
  }

  fetchObj(objVal){
    console.log("click",objVal);
    this.route.navigate(["details"],{queryParams: objVal})
  }

}
