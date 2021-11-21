import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  routeToLogin(){
    console.log("in routetologin");
    let obj = {"ticketId": 100 , "Name":"Parth" , "loc":"HRY"}
    this.router.navigate(['login',obj])
  }
}
