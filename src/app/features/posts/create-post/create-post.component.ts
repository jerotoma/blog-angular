import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/posts/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postName : string = '';
  postDescription : string = '';
  post: Post;
  messageError = [];
  public errorMessage : string = '';
  @Output("onCreatePost") public createPostEvent : EventEmitter<Post>  = new EventEmitter<Post>();

  constructor(private postService : PostService) {

  }

  ngOnInit() {

  }
  postData(){
    this.messageError = [];
    if(!this.postName) {
        this.messageError.push({
          'error':'Post name is required'
        });
      return;
    }
    if(!this.postDescription) {
        this.messageError.push({
          'error':'Post Description is required'
        });
      return;
    }
    this.post = {
      id:0,
      postName:this.postName,
      postDescription: this.postDescription,
      postCreatedOn: new Date(),
      postUpdatedOn: new Date(),
    };
    this.createPostEvent.emit(this.post);
    this.createPost(this.post);    
  }
  createPost(post: Post){
    this.postService.addPost(post).subscribe(data => {
          this.post = data;
        },
        error => {  
          this.errorMessage = error;
        });
  }

}
