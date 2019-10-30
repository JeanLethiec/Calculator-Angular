import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorScreenComponent } from './calculator-screen/calculator-screen.component';
import { CalculatorKeypadComponent } from './calculator-keypad/calculator-keypad.component';
import { OperationsHistoryComponent } from './operations-history/operations-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorScreenComponent,
    CalculatorKeypadComponent,
    OperationsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
