import { IUser } from 'src/app/shared/model/user-app.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
