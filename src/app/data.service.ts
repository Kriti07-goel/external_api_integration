import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
   
   }
   getUsersList() : Observable<any>{
     return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
    getUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    }

    getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}
