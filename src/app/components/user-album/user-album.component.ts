import { IAlbumPhoto, IUserAlbum } from 'src/app/shared/model/user-app.model';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
    selector: 'app-user-album',
    templateUrl: './user-album.component.html',
    styleUrls: ['./user-album.component.scss'],
})
export class UserAlbumComponent implements OnInit {
    @Input() album!: IUserAlbum;
    photos: IAlbumPhoto[] = [];
    isShowPhotos: boolean = false;

    constructor(private userService: UserService) {}

    ngOnInit(): void {}

    getPhotosByAlbumId() {
        this.isShowPhotos = !this.isShowPhotos;

        if (this.isShowPhotos) {
            this.userService
                .getPhotosByAlbumId(this.album.id)
                .subscribe((photos: IAlbumPhoto[]) => {
                    this.photos = photos;
                    // console.log(photos);
                });
        }
    }
}
