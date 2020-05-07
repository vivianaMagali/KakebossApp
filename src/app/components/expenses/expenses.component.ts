import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  seasons: string[] = ['Supervivencia', 'Ocio y vicio', 'Cultura', 'Extras'];
  constructor() { }

  ngOnInit(): void {
  }

}
