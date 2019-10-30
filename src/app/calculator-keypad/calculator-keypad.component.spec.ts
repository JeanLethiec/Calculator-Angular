import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorKeypadComponent } from './calculator-keypad.component';
import { By } from '@angular/platform-browser';

describe('CalculatorInputComponent', () => {
  let component: CalculatorKeypadComponent;
  let fixture: ComponentFixture<CalculatorKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorKeypadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the right class for normal keys', () => {
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].forEach((key) => {
      expect(component.getClassForKey(key)).toEqual(['key']);
    })
  });

  it('should return the right class for operator keys', () => {
    ['/', '*', '-', '+'].forEach((key) => {
      expect(component.getClassForKey(key).length).toBe(2);
      expect(component.getClassForKey(key)).toContain('operator');
      expect(component.getClassForKey(key)).toContain('key');
    })
  });

  it('should return the right class for equal key', () => {
    expect(component.getClassForKey('=').length).toBe(2);
    expect(component.getClassForKey('=')).toContain('total');
    expect(component.getClassForKey('=')).toContain('key');
  });

  it('should raise event when clicking a key', () => {
    let selectedKey: String;
    component.onKeyClicked.subscribe((key: String) => selectedKey = key);

    const deKey = fixture.debugElement.query(By.css('.total'));
    deKey.triggerEventHandler('click', null);

    expect(selectedKey).toBe('=');
  });
});
