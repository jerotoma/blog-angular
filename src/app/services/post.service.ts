import { Injectable } from '@angular/core';
import { Post } from '../models/posts/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts : Array<Post> = [];
  private postUrl : string = "/assets/data/posts.json";

  constructor(private http : HttpClient) { }

  addPost(post :Post){
    if(post != null){
      this.posts.push(post);
    }
  }
  loadPosts() : Observable<Post[]>{   
    return this.http.get<Post[]>(this.postUrl)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server error");
  }
}
