import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsHistoryComponent } from './operations-history.component';
import { NO_ERRORS_SCHEMA, Injectable, Component, Input } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({ selector: 'app-calculator-screen', template: '' })
class CalculatorScreenComponentStub { @Input() operations: Array<String>; }

class OperationsServiceMock {
  public getHistory() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["4+4 = 8"]), 1000);
    });
  }
}

describe('OperationsHistoryComponent', () => {
  let component: OperationsHistoryComponent;
  let fixture: ComponentFixture<OperationsHistoryComponent>;
  let operationsService: OperationsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

    fixture = TestBed.createComponent(OperationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service during initialization', () => {
    expect(operationsService.getHistory).toHaveBeenCalled();
  });
});
