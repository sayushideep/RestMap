import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ranges: number[];
  constructor(private router: Router) {
    this.ranges = [0.5, 1, 1.5];
  }

  ngOnInit(): void {}

  clickMenuItem(value: number) {
    this.router.navigate(['restrooms'], {
      state: { distanceInMeter: value * 1000 },
    });
    // this.router.navigateByUrl('/restrooms', { state: { distance: value } });
  }
}
