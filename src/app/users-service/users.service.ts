import { Injectable, OnInit } from '@angular/core';
import { CounterService } from '../counter-service/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];


  constructor(private counterService: CounterService) { }


  /**
   * Gets array of active users
   *
   * @returns active users
   */

   getActiveUsers(): string[] {
     return this.activeUsers;
    }

  /**
   * Gets array of inactive users
   *
   * @returns active users
   */

   getInactiveUsers(): string[] {
     return this.inactiveUsers;
    }

  /**
   * Moves active to inactive users and removes active user from active users
   *
   * @param user to be added
   */

  addActiveToInactiveUsers(user: string) {
    this.inactiveUsers.push(user);
    this.activeUsers = this.activeUsers.filter((value) => {
      return value.localeCompare(user) !== 0
    })
    console.dir(this.activeUsers);
    this.counterService.incrementActiveToInactive();
  }

  /**
   * Moves inactive to active users and removes inactive user from inactive users
   *
   * @param user to be added
   */

  addInactiveToActiveUsers(user: string) {
    this.activeUsers.push(user);
    this.inactiveUsers = this.inactiveUsers.filter((value) => {
      return value.localeCompare(user) !== 0
    })
    console.dir(this.inactiveUsers);
    this.counterService.incrementInactiveToActive();
  }


  ngOnInit(): void {

  }


}
