import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRestoomDetails } from '../models';

@Component({
  selector: 'app-restroom-details',
  templateUrl: './restroom-details.component.html',
  styleUrls: ['./restroom-details.component.css'],
})
export class RestroomDetailsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  restroomDetails: IRestoomDetails = {} as any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const id = params['id'];

      fetch(`http://localhost:8801/restrooms/${id}`).then(async response => {
        this.restroomDetails = await response.json();
      });
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
