import { Component } from '@angular/core';
import { ConnectService } from './connect.service'
import { Observable } from 'rxjs'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserserviceService } from './userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private instOfServ : ConnectService, private fb  : FormBuilder, private userv: UserserviceService, private router: Router){}
  registerForm : FormGroup;
  theme: string = "dark"
  data: any;
  error: any;
  
  ngOnInit(){
    // this.registerForm = this.fb.group({
    //   "uName": ["Parth",[Validators.required, Validators.pattern(/^[A-z]{3,6}$/)]],
    //   "emailId" : ["",[Validators.required,ValidateEmail]],
    //   "phoneNo" : ["",[Validators.required,Validators.min(6000000000),Validators.max(9999999999)]],
    //   "address" : ["",[Validators.required]]
    // })
    this.userv.changeT.subscribe((val)=>{this.theme = val})
  }

  // register(){
  //   console.log(this.registerForm.value)
  // }
  
  

  fetchDB(){
    console.log("click event working")
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
  }

  goToMovies(){
    this.router.navigateByUrl("/topmovies");
  }

  goToShows(){
    this.router.navigateByUrl("/topshows");
  }

  changeTheme(val){
    console.log(val)
    if(val == "Light"){
      this.theme = "first";
      this.userv.changeT.next("first")
      // localStorage.setItem("theme","first")
    }else if(val == "Dark"){
      this.theme = "second";
      // localStorage.setItem("theme","second")
      this.userv.changeT.next("second")
    }else{
      this.theme = "f";
      // localStorage.setItem("theme","f")
      this.userv.changeT.next("f")
    }
  }

  // title = 'MyApp';
  // arrStr = ["a","b","c"];
  // arrNum=[1,2,3];
  // arrObj = [{"empId":101,"empName":"Ram","skills" : ["HTML","CSS","BS"]},{"empId":102,"empName":"Laxman"},{"empId":103,"empName":"Bharat"}];
  // val : Number = 2;
  // myInput : String;
  // textColor : String = "Navy";
  // bgColor: String = "Cyan";
  // today : Date = new Date();
  // isText : Boolean = true;
  // isBorder : Boolean = true;
  // isPresent : Boolean = false;
  // userName
  // sendData : Boolean = false;
  // change(){
  //   this.isPresent=!this.isPresent
  // }

  // instanceOfService = new ConnectService()
  // newData
  // getAllData(){
  //   this.instOfServ.getAllDetails().subscribe(
  //     (success)=>{this.newData=success ;
  //     console.log(success)},
  //     (error)=>{console.log("Error")}
  //   )}
  //     }
  // }
  // // getAllData(){
  // //   this.newData = this.instOfServ.getAllDetails()
  
  // // }

  // dataFromChild : any;
  
  // getDataFromChild(inputParameter){
  //   this.dataFromChild=inputParameter
  // }

  // arrOfData = []
  // data : Observable<number>
  // learnObs(){
  //   this.data = new Observable((obs)=>{
  //     obs.next(10)
  //     obs.next(20)
  //     obs.next(30)
  //     setTimeout(()=>{ obs.next(40)},3000)
  //     obs.next(50)
  //     setTimeout(()=>{ obs.next(60)},3000)
  //     setTimeout(()=>{ obs.complete()},3000)
  //   })

  //   this.data.subscribe(
  //     (success)=>{ this.arrOfData.push(success)},
  //     (error)=>{console.log("Error occured while pushing")}
  //     // (complete)=>{}
  //   )
  // }


  // forms
  // userName : String=""
  // password : String=""
  // errorMessage : String =""
  // successMessage : String = ""
  // login(){
  //   console.log(this.userName)
  //   this.successMessage=""
  //   this.errorMessage=""
  //   if(this.userName=="admin" && this.password=="12345"){
  //     this.successMessage="logged in"
  //   }
  //   else{
  //     this.errorMessage="login failed"
  //   }
  // }
  }


// function ValidateEmail(input : FormControl){
//   console.log(input.value)
//   let inputVal = input.value
//     return inputVal.match(/^[A-z]+@infy\.com$/)?null : {
//       "emailIdError":{"message" : "Enter an infosys Email Id"}
//     } 
// }