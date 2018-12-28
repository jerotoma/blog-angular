import { Injectable } from '@angular/core';
import { Post } from '../models/posts/post';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  private posts : Array<Post> = [];
  private postUrl : string = "/assets/data/posts.json";

  constructor(private http : HttpClient) { }

  addPost(post :Post) : Observable<Post>{
    return this.http.post<Post>(this.postUrl, post, httpOptions)
                    .pipe(catchError(this.errorHandler));
  }
  loadPosts() : Observable<Post[]>{   
    return this.http.get<Post[]>(this.postUrl)
                    .pipe(retry(3), catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
}
