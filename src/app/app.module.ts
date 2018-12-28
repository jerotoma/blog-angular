//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ServerComponent } from './features/servers/server/server.component';
import { NavbarComponent } from './features/navbar/navbar.component';

//Services
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NavbarComponent,
    RoutingComponents,
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
