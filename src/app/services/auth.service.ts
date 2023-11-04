import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://localhost:8080/auth/';
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  $isLoggedIn = this.isLoggedIn.asObservable();
  test = 'a';
  constructor(private http: HttpClient) {
    const token = this.getToken();
    if (token != null) {
      this.getUserByToken(token).subscribe({
        next: (res) => {
          this.isLoggedIn.next(true);
        },
        error: () => {
          this.logout();
        },
      });
    }
  }

  login(username: string, password: string) {
    return this.http.post<any>(
      this.url + 'token',
      { username, password },
      {
        headers: { Authorization: 'Basic ' + btoa(username + ':' + password) },
      },
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }

  register(user: RegisterUser) {
    return this.http.post<any>(this.url + 'register', user);
  }

  getUserByToken(token: string) {
    return this.http.get<any>(this.url + 'user');
  }

  setToken(token: string) {
    this.isLoggedIn.next(true);
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
