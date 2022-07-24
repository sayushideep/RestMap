import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showFindAToilet: boolean = true;
  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/restrooms') {
          this.showFindAToilet = false;
        } else {
          this.showFindAToilet = true;
        }
      }
    });

   }

  ngOnInit(): void {
  }

}
