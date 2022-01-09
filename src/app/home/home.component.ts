import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router,RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userv: UserserviceService, private route: Router) { }

  theme: string;
  data: any = [];
  error: any;
  searchval: any;
  
  ngOnInit() {
    this.userv.fetchDb().subscribe(
      (success)=>{
        this.data = success;
        console.log(this.data)
      },
      (err)=>{
        this.error = err;
        console.log(err);
      }
    )


    this.userv.changeT.subscribe((val)=>{this.theme = val});
    this.userv.media.next("tv")

  }

  searchMovie(){
    this.route.navigateByUrl("search/"+this.searchval+"/false")
    console.log("clicked")
  }

  searchAd(){
    this.route.navigateByUrl("search/"+this.searchval+"/true")
  }

  ngDoCheck(){
    // this.theme = localStorage.getItem("theme")
  }

  fetchObj(objVal){
    console.log("click",objVal);
    this.route.navigate(["details"],{queryParams: objVal})
  }

}
