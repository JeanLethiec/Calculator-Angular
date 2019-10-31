import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { OperationsHistoryComponent } from './operations-history.component';
import { Component, Input } from '@angular/core';
import { OperationsService } from '../operations.service';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({ selector: 'app-calculator-screen', template: '' })
class CalculatorScreenComponentStub { @Input() operations: Array<String>; }

class OperationsServiceMock {
  public getHistory() {
    return new Promise(() => { });
  }
}

describe('OperationsHistoryComponent', () => {
  let component: OperationsHistoryComponent;
  let fixture: ComponentFixture<OperationsHistoryComponent>;
  let operationsService: OperationsService;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
        OperationsHistoryComponent,
        CalculatorScreenComponentStub,
      ],
      providers: [
        { provide: OperationsService, useClass: OperationsServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    operationsService = TestBed.get(OperationsService);
    spyOn(operationsService, 'getHistory').and.callThrough();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(OperationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service during initialization', () => {
    expect(operationsService.getHistory).toHaveBeenCalled();
  });

  it('should have button to go to calculator', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.button'));
    button.triggerEventHandler('click', null);
    tick();
    expect(location.path()).toBe('/');
  }));
});
