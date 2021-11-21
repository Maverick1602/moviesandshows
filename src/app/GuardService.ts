import { Injectable } from '@angular/core';
import {CanActivate , Router} from '@angular/router';
import { UserserviceService } from './userservice.service'

@Injectable()
export class GuardService implements CanActivate{
    constructor(private service : UserserviceService, private router : Router){}
        canActivate(){
            let getTodayDay = this.service.canLoginToday()
            if(getTodayDay){
                this.router.navigate(['/login'])
            }else{
                return false
            }
        }
}




