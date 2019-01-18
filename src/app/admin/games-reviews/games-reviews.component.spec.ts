import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesReviewsComponent } from './games-reviews.component';

describe('GamesReviewsComponent', () => {
  let component: GamesReviewsComponent;
  let fixture: ComponentFixture<GamesReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
