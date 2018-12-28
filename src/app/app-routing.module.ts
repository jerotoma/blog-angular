import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './features/posts/posts.component';
import { CreatePostComponent } from './features/posts/create-post/create-post.component';
import { ShowPostComponent } from './features/posts/show-post/show-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id',      component: ShowPostComponent },
  { path: 'posts/create',   component:CreatePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
