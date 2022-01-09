import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {

  constructor(private userv: UserserviceService, private route: ActivatedRoute, private router: Router) { }

  theme: string;
  data: any=[];
  error: any;

  ngOnInit() {
    this.userv.getTrendingMovie().subscribe(
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
    this.userv.media.next("movie")
    

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
