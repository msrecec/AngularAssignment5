import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService implements OnInit {
  private activeToInactive = 0;
  private inactiveToActive = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Incremented active to inactive actions. activeToInactive = ' + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('Incremented inactive to active actions. inactiveToActive = ' + this.inactiveToActive);
  }

}
