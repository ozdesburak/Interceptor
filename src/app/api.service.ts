import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class ApiService {
  private postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  /**
   *
   * JsonPlaceHolder Data
   */
  getData(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsURL);
  }
}
