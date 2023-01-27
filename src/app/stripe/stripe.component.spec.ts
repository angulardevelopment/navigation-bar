import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { StripeComponent } from './stripe.component';
class MockRouter {
  public ne = new NavigationStart(0, 'http://localhost:4200/login', ' ');
  public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  });
}
fdescribe('StripeComponent', () => {
  let component: StripeComponent;
  let fixture: ComponentFixture<StripeComponent>;
  const routerStub = {
    events: {
      subscribe: () => ({})
    },
    url: {
      includes: () => ({})
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ StripeComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
