import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRestroomData } from '../models';

@Component({
  selector: 'app-restroom-list',
  templateUrl: './restroom-list.component.html',
  styleUrls: ['./restroom-list.component.css'],
})
export class RestroomListComponent implements OnInit {
  restrooms: IRestroomData[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const currNav = this.router.getCurrentNavigation();
    const distanceInMeter =
      (currNav &&
        currNav.extras &&
        currNav.extras.state &&
        currNav.extras.state['distanceInMeter']) ||
      1000;
    fetch('http://localhost:8801/restrooms/', {
      method: 'POST',
      body: JSON.stringify({
        location: {
          latitude: 17.385332,
          longitude: 78.4817114,
        },
        distance: distanceInMeter,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response: any) => {
      this.restrooms = await response.json();
    });
  }
}
