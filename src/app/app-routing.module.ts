import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './features/posts/posts.component';
import { CreatePostComponent } from './features/posts/create-post/create-post.component';
import { ShowPostComponent } from './features/posts/show-post/show-post.component';
import { ServersComponent } from './features/servers/servers.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/create',   component:CreatePostComponent },
  { path: 'posts/:id',      component: ShowPostComponent },
  { path: 'servers',      component: ServersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  PostsComponent,
  CreatePostComponent,
  ShowPostComponent,
  ServersComponent
]
