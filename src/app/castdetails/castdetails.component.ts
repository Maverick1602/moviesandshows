import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service'

@Component({
  selector: 'app-castdetails',
  templateUrl: './castdetails.component.html',
  styleUrls: ['./castdetails.component.css']
})
export class CastdetailsComponent implements OnInit {

  constructor(private actroute: ActivatedRoute, private userv: UserserviceService) { }
  theme: string;
  data: any;
  id:any;
  ngOnInit() {
    this.userv.changeT.subscribe((val)=>{this.theme = val});
    this.id = this.actroute.snapshot.params["id"]
    console.log("id",this.id)
    this.userv.getCastDetails(this.id).subscribe((success)=>{this.data = success; console.log(this.data)})
  }

}
