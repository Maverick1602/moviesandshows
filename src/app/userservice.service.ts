import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  canLoginToday(){
    let today : Date = new Date();
    if(today.getDay()==6 || today.getDay()==7){
      return false
    }else{
      return true
    } 
  }

  public changeT = new BehaviorSubject<any>("dark")


  key: string = "9c0e0e8844589d931df3be595ce4ffb1"

  getTrendingMovie() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+this.key)
  }

  getTrendingShow() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/tv/week?api_key="+this.key)
  }

  fetchDb() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=9c0e0e8844589d931df3be595ce4ffb1&language=en-US&page=1")
  }
}
