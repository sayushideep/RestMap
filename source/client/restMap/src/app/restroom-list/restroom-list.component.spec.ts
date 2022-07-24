import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroomListComponent } from './restroom-list.component';

describe('RestroomListComponent', () => {
  let component: RestroomListComponent;
  let fixture: ComponentFixture<RestroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroomListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
