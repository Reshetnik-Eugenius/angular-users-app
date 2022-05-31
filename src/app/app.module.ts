import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAlbumComponent } from './components/user-album/user-album.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { UserTodoComponent } from './components/user-todo/user-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserAlbumComponent,
    UserPostComponent,
    UserTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
