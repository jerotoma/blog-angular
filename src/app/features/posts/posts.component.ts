import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from 'src/app/models/posts/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts : Array<Post> =  [];
  public errorMessage : string = '';
  constructor(
    private postService : PostService,
    private router : Router) { }

  ngOnInit() {
    this.loadPosts();
  }
  loadPosts(){
    this.postService
          .loadPosts()
          .subscribe( 
            data  => {  
              this.posts = data;
            },
            error => {  
              this.errorMessage = error;
            });
  }
 

}