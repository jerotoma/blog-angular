import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postName : string = '';
  postDescription : string = '';
  post: Post;
  messageError = [];

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
    this.post.postName = this.postName;
    this.post.postDescription = this.postDescription;
    this.postService.addPost(this.post);
    console.log(this.postName);
    console.log(this.postDescription);
  }

}
