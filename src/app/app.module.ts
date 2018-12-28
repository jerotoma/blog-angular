//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ServerComponent } from './features/server/server.component';
import { ServersComponent } from './features/servers/servers.component';
import { PostsComponent } from './features/posts/posts.component';
import { PostComponent } from './features/posts/post/post.component'

//Services
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PostComponent,
    PostsComponent
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
