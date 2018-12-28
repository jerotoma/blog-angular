import { Component, OnInit } from '@angular/core';
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
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.loadPosts();
  }
  loadPosts(){
    this.postService
          .loadPosts()
          .subscribe( data  => {  this.posts = data; },
                      error => {  this.errorMessage = error;});
  }
  createPost(post: Post){
    this.postService.addPost(post).subscribe(data => {
          this.posts.push(data)
        },
        error => {  
          this.errorMessage = error;
        });
  }

}