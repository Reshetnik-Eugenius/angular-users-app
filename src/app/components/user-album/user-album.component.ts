import { IUserAlbum } from 'src/app/shared/model/user-app.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.scss']
})
export class UserAlbumComponent implements OnInit {

  @Input() album!: IUserAlbum;

  constructor() { }

  ngOnInit(): void {
  }

}
