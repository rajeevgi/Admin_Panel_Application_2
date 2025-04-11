import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:5000/api/auth";

  constructor(private http : HttpClient) { }

  login(data : any){
    return this.http.post(`${this.authUrl}/login`, data, { withCredentials : true });
  }

  register(data : any){
    return this.http.post(`${this.authUrl}/register`, data, { withCredentials : true });
  }
  
}
