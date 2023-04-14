import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL =  "http://localhost:3000/api"
  constructor(private http:HttpClient) { }


  signIn(user:any){
    return this.http.post<any>(this.URL+'/signin', user)
  }

  register(user:any){
    return this.http.post<any>(this.URL+'/register', user)
  }

  // users)


}
