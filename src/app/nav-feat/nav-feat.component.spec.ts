import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFeatComponent } from './nav-feat.component';

describe('NavFeatComponent', () => {
  let component: NavFeatComponent;
  let fixture: ComponentFixture<NavFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
