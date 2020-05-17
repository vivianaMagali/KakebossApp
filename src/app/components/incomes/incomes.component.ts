import { Component, OnInit, NgZone } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  name_income: string;
  amount: number;
  date:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addIncome() {
    var user = firebase.auth().currentUser;
      console.log("añadi un ingreso");
      // firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        db.collection("usuarios").doc(user.uid).collection("incomes").doc("data-incomes").set({
          name_income: this.name_income,
          amount: this.amount,
          date:this.date
        })
      }
    // })
    this.router.navigate(['/inicio']);
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['/inicio']); 
  }


}
