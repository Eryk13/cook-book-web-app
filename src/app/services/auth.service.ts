import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = "http://localhost:8080/auth/"

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.url + "token", {username, password}, { headers: { Authorization: 'Basic ' + btoa(username + ':' + password)}});
  }

  register(user: RegisterUser) {
    return this.http.post<any>(this.url + "register" , user);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
