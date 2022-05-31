import { Component, OnInit, Input } from '@angular/core';
import { IAlbumPhoto } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.scss']
})
export class AlbumPhotoComponent implements OnInit {

  @Input() photo!: IAlbumPhoto; 

  constructor() { }

  ngOnInit(): void {
  }

}
