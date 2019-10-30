import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.scss']
})
export class CalculatorScreenComponent implements OnInit {

  @Input() operations: Array<String>;

  constructor() { }

  ngOnInit() {
  }

}
