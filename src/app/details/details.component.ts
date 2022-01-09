import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor( private actroute: ActivatedRoute, private userv: UserserviceService) { }
  theme: string;
  data: any;
  media:any;
  ngOnInit() {
    this.actroute.queryParams.subscribe((val)=>{this.data = val});
    // console.log("working",this.data)
    this.userv.changeT.subscribe((val)=>{this.theme = val});
    this.userv.media.subscribe((val)=>{this.media = val});
    if(this.data.name){
      console.log("tv");
      this.media = "tv";
      this.userv.media.next("tv")
    }else{
      console.log("movie");
      this.media = "m";
      this.userv.media.next("m")
    }
  }

}
