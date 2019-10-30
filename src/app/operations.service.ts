import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  getHistory() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["1+1 = 2", "6*7 = 42"]), 1000);
    })
  }
}
