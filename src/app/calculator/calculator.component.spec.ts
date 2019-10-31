import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { OperationsHistoryComponent } from '../operations-history/operations-history.component';

@Component({ selector: 'app-calculator-screen', template: '' })
class OperationsHistoryComponentStub { @Input() operations: Array<String>; }

const routes: Routes = [
  { path: "history", component: OperationsHistoryComponentStub }
];

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        CalculatorComponent,
        OperationsHistoryComponentStub
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button to go to history', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.button'));
    button.triggerEventHandler('click', null);
    tick();
    expect(location.path()).toBe('/history');
  }))
});
