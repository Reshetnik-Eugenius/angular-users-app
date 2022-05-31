import { Component, OnInit } from '@angular/core';
import { IUser } from './shared/model/user-app.model';
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

    getUsers(): void {
        this.userService.getAllUsers().subscribe((users: IUser[]) => {
            this.users = users;
            // console.log(users);
        });
    }
}
