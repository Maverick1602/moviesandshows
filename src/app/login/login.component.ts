import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  dataFromParent

  @Output()
  customEvent : EventEmitter<any> = new EventEmitter()

  dataToEmit: number =100;
  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((element)=>{
      console.log(element)
    })
  }
  sendDataFromChild(){
      this.customEvent.emit(this.dataToEmit)
  }

  
  

}
