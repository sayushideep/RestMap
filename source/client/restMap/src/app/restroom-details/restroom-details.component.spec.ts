import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroomDetailsComponent } from './restroom-details.component';

describe('RestroomDetailsComponent', () => {
  let component: RestroomDetailsComponent;
  let fixture: ComponentFixture<RestroomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestroomDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestroomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
