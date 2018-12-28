import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  
  public postId : number;
  public post : Post;
  public posts : Array<Post> =  [];
  public errorMessage : string = '';
  constructor(
    private postService : PostService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    
    //For one time load
    let id = this.route.snapshot.paramMap.get("id");
    
    this.route.params.subscribe(routeParams => {
        this.loadPost(routeParams.id);
    });
    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });

   
  }
  ngOnDestroy(){
    console.log("Distroyed");
  }
  loadPost(id : number){
    this.postService
          .loadPosts()
          .subscribe( 
            data  => { 
              this.posts = data;
              this.post = this.posts.find( post => post.id == id);
            },
            error => {  this.errorMessage = error;});
  }
}
