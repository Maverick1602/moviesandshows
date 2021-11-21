import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userv: UserserviceService) { }

  theme: string;
  data: any;
  error: any;

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


    this.userv.changeT.subscribe((val)=>{this.theme = val})

  }

  ngDoCheck(){
    // this.theme = localStorage.getItem("theme")
  }

}
