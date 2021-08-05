import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users-service/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = []

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.getActiveUsers();
  }

  onSetToInactive(user: string) {
    this.usersService.addActiveToInactiveUsers(user);
    this.users = this.usersService.getActiveUsers();
  }
}
