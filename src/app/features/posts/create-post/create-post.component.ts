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

  @Output("onCreatePost") public createPost : EventEmitter<Post>  = new EventEmitter<Post>();

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
      id:'',
      postName:this.postName,
      postDescription: this.postDescription,
      postCreatedOn: new Date(),
      postUpdatedOn: new Date(),
    };
    this.createPost.emit(this.post);    
  }

}
