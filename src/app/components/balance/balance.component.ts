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

      //logro obtener la suma total de los vlores de Income, pero estos son devueltos en formato de objeto promesa, icompatible con un type number
      var localIncome = db.collection("usuarios").doc(user.uid).collection("incomes").get().then(function (totalIncomes) {
        var aux = 0;
        totalIncomes.forEach(function (object) {
          return aux += +object.data().amount;
        });
        return aux;
      });

      //logro obtener la suma total de los vlores de Outcome, pero estos son devueltos en formato de objeto promesa, icompatible con un type number
      var localOutcome = db.collection("usuarios").doc(user.uid).collection("expenses").get().then(function (totalOutcomes) {
        var aux = 0;
        totalOutcomes.forEach(function (object) {
          return aux += +object.data().amount;
        });
        return aux;
      });

      console.log("incomes =", localIncome);
      console.log("outcomes =", localOutcome);
     // console.log("total => ", localIncome - localOutcome);
    }
  }
}
