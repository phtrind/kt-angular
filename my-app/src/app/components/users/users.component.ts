import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {}

  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response.results.map(
        item =>
          new User(
            item.name.first + '' + item.name.last,
            item.email,
            item.picture.large
          )
      );
    });
  }
}
