import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignedGamesDetailComponent } from './designed-games-detail.component';

describe('DesignedGamesDetailComponent', () => {
  let component: DesignedGamesDetailComponent;
  let fixture: ComponentFixture<DesignedGamesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignedGamesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignedGamesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
