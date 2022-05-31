import { Component, OnInit } from '@angular/core';
import { IUser, IUserAlbum, IUserPost, IUserTodo } from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers();
    }

    users: IUser[] = [];
    userInfo!: IUser;
    posts: IUserPost[] = [];
    albums: IUserAlbum[] = [];
    todos: IUserTodo[] = [];

    getUsers(): void {
        this.userService
            .getAllUsers()
            .subscribe((users: IUser[]) => {
                this.users = users;
                // console.log(users);
        });
    }

    getUserInfo(id: number) {
        this.userService
            .getUserById(id)
            .subscribe((user: IUser) => {
                this.userInfo = user;
                this.posts = [];
                this.albums = [];
                this.todos = [];
                // console.log(user);
        });
    }

    getPosts(id: number): void {
        this.userService
            .getPostsByUserId(id)
            .subscribe((posts: IUserPost[]) => {
                this.posts = posts;
                this.albums = [];
                this.todos = [];
                // console.log(posts);
            });
    }

    getUserAlbums(id: number): void {
        this.userService
            .getAlbumsByUserId(id)
            .subscribe((albums: IUserAlbum[]) => {
                this.albums = albums;
                this.posts = [];
                this.todos = [];
                // console.log(albums);
            });
    }

    getUserTodos(id: number): void {
        this.userService
            .getTodosByUserId(id)
            .subscribe((todos: IUserTodo[]) => {
                this.todos = todos;
                this.posts = [];
                this.albums = [];
                // console.log(todos);
        });
    }
}
