import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Posts } from './interfaces/posts-interface';
import { Auth } from 'src/store/model/auth.model';
import { Recipe } from './interfaces/recipe-interface';
import { Users } from './interfaces/users-interface';
import { CreateRecipe } from './interfaces/create-recipe-interface';

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

  getRecipe(id: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.apiUrl}/posts/${id}`);
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

  register(userEmail: string, userPassword: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = {
      email: userEmail,
      password: userPassword,
    };

    return this.httpClient.post<Auth>(`${this.apiUrl}/users/register`, body, {
      headers: headers,
    });
  }

  getAllUsers(token: string): Observable<Users[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.httpClient.get<Users[]>(this.apiUrl + '/users', {
      headers: headers,
    });
  }

  sendPost(token: string, post: CreateRecipe) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = post;

    return this.httpClient.post(this.apiUrl + '/posts', body, {
      headers: headers,
    });
  }

  patchPost(token: string, id: number, post: CreateRecipe) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = post;

    return this.httpClient.patch(this.apiUrl + '/posts/' + id, body, {
      headers: headers,
    });
  }

  deletePost(token: string, id: number) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.httpClient.delete(this.apiUrl + '/posts/' + id, {
      headers: headers,
    });
  }
}
