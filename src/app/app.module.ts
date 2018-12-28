//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ServerComponent } from './features/servers/server/server.component';
import { ServersComponent } from './features/servers/servers.component';
import { PostsComponent } from './features/posts/posts.component';
import { CreatePostComponent } from './features/posts/create-post/create-post.component'

//Services
import { PostService } from './services/post.service';
import { ShowPostComponent } from './features/posts/show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CreatePostComponent,
    PostsComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
