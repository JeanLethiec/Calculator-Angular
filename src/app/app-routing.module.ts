import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { OperationsHistoryComponent } from './operations-history/operations-history.component';

const routes: Routes = [
  { path: "", component: CalculatorComponent },
  { path: "history", component: OperationsHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
