import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  selectedMenu: String = '';
  ranges: String[];
  constructor() {
    this.ranges = ['In 500 meters', 'In 1 kilometer', 'In 1.5 kilometers'];
  }

  ngOnInit(): void {}

  clickMenuItem(value: String) {
    this.selectedMenu = value;
  }
}
