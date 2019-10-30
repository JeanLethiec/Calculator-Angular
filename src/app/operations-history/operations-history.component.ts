import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.scss']
})
export class OperationsHistoryComponent implements OnInit {

  private operations: Array<String> = [];

  constructor(private operationsService: OperationsService) { }

  ngOnInit() {
    this.operationsService.getHistory().then(((data: Array<String>) => this.operations = data));
  }

}
