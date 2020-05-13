import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  name_income: string;
  amount: number;

  constructor() { }

  ngOnInit(): void {
  }

  addIncome() {
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("usuarios").doc(user.uid).collection("incomes").add({
        name_income: this.name_income,
        amount: this.amount
      })
    }
  }
}