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

  constructor() { }
  ngOnInit(): void {}

  getBalance() {
    var user = firebase.auth().currentUser;
    if (user) {
      var incomes = db.collection("usuarios").doc(user.uid).collection("incomes").get().then(function (totalIncomes) {
        totalIncomes.forEach(function (object) {
          // doc.data() is never undefined for query doc snapshots
          console.log(object.id, " => ", object.data());
        });
      });
      var outcomes = db.collection("usuarios").doc(user.uid).collection("outcomes").get();
    }
  }
}
