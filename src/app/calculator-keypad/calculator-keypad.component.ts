import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-calculator-keypad",
  templateUrl: "./calculator-keypad.component.html",
  styleUrls: ["./calculator-keypad.component.scss"]
})
export class CalculatorKeypadComponent implements OnInit {
  private keys: Array<Array<String>> = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"]
  ];

  @Output() onKeyClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleKeyClick(key: String) {
    this.onKeyClicked.emit(key);
  }

  getClassForKey(key: String) {
    let classes = ["key"];
    switch (key) {
      case ("*"):
      case ("/"):
      case ("-"):
      case ("+"):
        return [...classes, "operator"];
      case ("="):
        return [...classes, "total"];
      default:
        return classes;
    }
  }
}
