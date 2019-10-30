import { Component, OnInit } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  private previousOperations: Array<String> = [];
  private currentOperation: Array<String> = [];
  private operations: Array<String> = [];

  constructor() { }

  ngOnInit() {
  }

  onKeyClicked(key) {
    if (key === "=") {
      this.previousOperations = [evaluate(this.currentOperation.join('')).toString(), ...this.previousOperations];
      this.currentOperation = [];
    } else {
      this.currentOperation = [...this.currentOperation, key];
    }
    this.regenerateOperations();
  }

  regenerateOperations() {
    this.operations = [this.currentOperation.join(''), ...this.previousOperations]
  }

}
