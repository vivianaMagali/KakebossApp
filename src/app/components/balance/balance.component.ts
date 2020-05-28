import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public diference: number;

  constructor() {}
  ngOnInit(): void {}

  getBalance() {
    
    var user = firebase.auth().currentUser;
    if (user) {
      var localIncome = db.collection("usuarios").doc(user.uid).collection("incomes").get().then(function(totalIncomes){
        var aux$ = 0;
        totalIncomes.forEach(function (object) {
          //console.log("amount "+aux$);
          return aux$ += +object.data().amount;
        });
        //console.log("amounts "+aux$);
        return aux$;
      });


      var localExpenses = db.collection("usuarios").doc(user.uid).collection("expenses").get().then(function(totalExpenses){
        var aux$ = 0;
        totalExpenses.forEach(function (object) {
          //console.log("amount "+aux$);
          return aux$ += +object.data().amount;
          
        });
        //console.log("amounts "+aux$);
        return aux$;
      });
      console.log("resultado res ",getExample());
    }


    async function getExample() {

      var income=localIncome.then((value) => {
        console.log("suma ingesos ",value);
        return value;
      });
      
      var expenses=localExpenses.then((value) => {
        console.log("suma gastos ",value);
        return value;
      });

      var resultA = await income;
      var resultB = await expenses;
      
      // this.diference=resultA-resultB;
      // console.log("resultado ",this.diference);
      return resultA-resultB;;
  }
    console.log("resultado ",this.diference);
    console.log("res");
  }

}
