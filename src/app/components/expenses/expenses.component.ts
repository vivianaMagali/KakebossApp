import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
 
  name_expense: string;
  amount: number;
  chosenCategory: string;
  date:string;
  categories: string[] = ['Supervivencia', 'Ocio y vicio', 'Cultura', 'Extras'];
  constructor() { }

  ngOnInit(): void {
  }


  addExpense(){
    var user = firebase.auth().currentUser;
    console.log("hice click en addExpense");
      if (user) {
       db.collection("usuarios").doc(user.uid).collection("expenses").add({
            name_expense: this.name_expense,
            amount: this.amount,
            category: this.chosenCategory,
            date:this.date
      })
    }
  }



}
