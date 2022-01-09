import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topshows',
  templateUrl: './topshows.component.html',
  styleUrls: ['./topshows.component.css']
})
export class TopshowsComponent implements OnInit {

  constructor(private userv: UserserviceService, private router: Router) { }

  theme: string;
  data: any = [];
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
    this.userv.media.next("tv");
    
  }

  ngDoCheck(){
    // this.theme = localStorage.getItem("theme")
    // this.userv.changeT.subscribe((val)=>{this.theme = val})
  }

  fetchObj(objVal){
    console.log("click",objVal);
    this.router.navigate(["details"],{queryParams: objVal})
  }

}
