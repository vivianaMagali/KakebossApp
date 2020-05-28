import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-expectations',
  templateUrl: './expectations.component.html',
  styleUrls: ['./expectations.component.css']
})
export class ExpectationsComponent implements OnInit {

  init_money: number;
  sure_expense: number;
  sure_expense_desc: string;
  savings: number;
  available: number; //init_money - init_outcome
  goals: string;
  promises: string;
  date: string;

  constructor() { }

  ngOnInit(): void {
  }

  addExpectation() {
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("usuarios").doc(user.uid).collection("expectations").add({

        init_money: this.init_money,
        sure_expense: this.sure_expense,
        sure_expense_desc: this.sure_expense_desc,
        savings: this.savings,
        available: this.init_money - this.sure_expense,        
        goals: this.goals,
        promises: this.promises,
        date: new Date(Date.now())
      })

      db.collection("usuarios").doc(user.uid).collection("incomes").add({
        name_income: 'expectation',
        amount: this.init_money - this.sure_expense,
        date: new Date(Date.now())
      })
    }
    console.log("añadi expectativa");
  }

}
