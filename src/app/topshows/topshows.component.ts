import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-topshows',
  templateUrl: './topshows.component.html',
  styleUrls: ['./topshows.component.css']
})
export class TopshowsComponent implements OnInit {

  constructor(private userv: UserserviceService) { }

  theme: string;
  data: any;
  error: any;

  ngOnInit() {
    this.userv.getTrendingShow().subscribe(
      (success)=>{
        this.data = success;
        console.log(this.data)
      },
      (err)=>{
        this.error = err;
        console.log(err);
      }
    )

    this.userv.changeT.subscribe((val)=>{this.theme = val})
    
  }

  ngDoCheck(){
    // this.theme = localStorage.getItem("theme")
    // this.userv.changeT.subscribe((val)=>{this.theme = val})
  }

}
