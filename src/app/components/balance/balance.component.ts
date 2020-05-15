import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  incomeVal: number;
  outcomeVal: number;

  constructor() {
    this.incomeVal = 0;
    this.outcomeVal = 0;
  }
  ngOnInit(): void {}

  getBalance() {
    var user = firebase.auth().currentUser;
    if (user) {

      var localIncome = db.collection("usuarios").doc(user.uid).collection("incomes").get().then(function (totalIncomes) {
        var aux = 0;
        totalIncomes.forEach(function (object) {
          //incomeVal +=  (object.data().amount);
          // object.data() is never undefined for query doc snapshots
          //console.log(object.id, " => ", object.data().amount);
          return aux += +object.data().amount;
        });
        return aux;
      });
      console.log(localIncome);
      var outcomes = db.collection("usuarios").doc(user.uid).collection("outcomes").get();
      console.log("income =", this.incomeVal);
    }
  }
}
