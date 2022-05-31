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
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { AlbumPhotoComponent } from './components/album-photo/album-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserAlbumComponent,
    UserPostComponent,
    UserTodoComponent,
    PostCommentComponent,
    AlbumPhotoComponent
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
