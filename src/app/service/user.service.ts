import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL =  "http://localhost:3000/api"
  constructor(private http:HttpClient) { }


  getUsers(user:any){
    return this.http.get<any>(this.URL+'/users')
  }
}
