import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users-service/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[] = []

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.getInactiveUsers();
  }

  onSetToActive(user: string) {
    this.usersService.addInactiveToActiveUsers(user);
    this.users = this.usersService.getInactiveUsers();
  }
}
