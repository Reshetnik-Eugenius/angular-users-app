import { Component, OnInit, Input } from '@angular/core';
import { IPostComment, IUserPost } from 'src/app/shared/model/user-app.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
    @Input() post!: IUserPost;
    comments: IPostComment[] = [];
    isShowComments: boolean = false;

    constructor(private userService: UserService) {}

    ngOnInit(): void {}

    getCommentsByPostId() {
        this.isShowComments = !this.isShowComments;

        if (this.isShowComments) {
            this.userService
                .getCommentsByPostId(this.post.id)
                .subscribe((comments: IPostComment[]) => {
                    this.comments = comments;
                    // console.log(comments);
                });
        }
    }
}
