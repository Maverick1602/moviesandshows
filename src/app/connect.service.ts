import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
arr = [1,2,3,4]

  constructor(private http: HttpClient) { }
  
  getAllDetails() : Observable<any> {
   return this.http.get("http://localhost:3000/get1")
  }
}
