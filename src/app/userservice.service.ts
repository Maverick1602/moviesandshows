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
  public media = new BehaviorSubject<any>("tv")


  key: string = "9c0e0e8844589d931df3be595ce4ffb1"

  getTrendingMovie() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/movie/week?api_key="+this.key)
  }

  getTrendingShow() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/trending/tv/week?api_key="+this.key)
  }

  fetchDb() : Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key="+this.key+"&language=en-US&page=1")
  }

  search(val) : Observable<any> {
    return this.http.get("https://api.themoviedb.org/4/search/movie?api_key="+this.key+"&language=en-US&query="+val+"&page=1&include_adult=false")
  }

  searchAd(val) : Observable<any> {
    return this.http.get("https://api.themoviedb.org/4/search/movie?api_key="+this.key+"&language=en-US&query="+val+"&page=1&include_adult=true")
  }

  getSimilarMovies(id) :Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key="+this.key+"&language=en-US&page=1")
  }

  getSimilarShows(id) :Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/tv/"+id+"/similar?api_key="+this.key+"&language=en-US&page=1")
  }

  getMovieCast(id) :Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+this.key+"&language=en-US")
  }

  getTvCast(id) :Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/tv/"+id+"/credits?api_key="+this.key+"&language=en-US")
  }

  getCastDetails(id) :Observable<any>{
    return this.http.get("https://api.themoviedb.org/3/person/"+id+"?api_key="+this.key+"&language=en-US")
  }
}
