import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Posts } from './interfaces/posts-interface';
import { Auth } from 'src/store/model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  role: 'user' | 'admin' | 'guest' = 'guest';

  private apiUrl = 'https://ea-backend.wckz.space';

  getAllPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${this.apiUrl}/posts`);
  }

  auth(userLogin: string, userPassword: string): Observable<Auth> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      username: userLogin,
      password: userPassword,
    };

    return this.httpClient.post<Auth>(`${this.apiUrl}/users/login`, body, {
      headers: headers,
    });
  }
}
