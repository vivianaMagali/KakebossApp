import { Component, OnInit, NgZone } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent  {

  name_income: string;
  amount: number;
  date:string;

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }

    message(){
      console.log("hice click en login"); 
      this._snackBar.open( "¡nuevo ingreso añadido!", "", {
        duration: 2000,
      });
    }

  addIncome() {
    var user = firebase.auth().currentUser;
      console.log("añadi un ingreso");
      // firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        db.collection("usuarios").doc(user.uid).collection("incomes").add({
          name_income: this.name_income,
          amount: this.amount,
          date:this.date
        })
      }
    // })
    this.router.navigate(['/inicio']);
  }

  cancel(){
    this.router.navigate(['/inicio']); 
  }


}
