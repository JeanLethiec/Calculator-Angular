import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorScreenComponent } from './calculator-screen.component';
import { By } from '@angular/platform-browser';

describe('CalculatorScreenComponent', () => {
  let component: CalculatorScreenComponent;
  let fixture: ComponentFixture<CalculatorScreenComponent>;
  const expectedOperations = ["1+1=2", "2+2=4"];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorScreenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorScreenComponent);
    component = fixture.componentInstance;

    component.operations = expectedOperations;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display operations that are given as input', () => {
    const screenDe = fixture.debugElement.queryAll(By.css('.outputLine'));
    expect(screenDe.length).toBe(2);
    screenDe.forEach((outputLineDe, index) => {
      expect(outputLineDe.nativeElement.textContent.trim()).toEqual(expectedOperations[index]);
    })
  })
});
