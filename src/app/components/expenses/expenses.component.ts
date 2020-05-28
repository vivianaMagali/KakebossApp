import { Component, OnInit } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import {  Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
 
  
  name_expense: string;
  amount: number;
  chosenCategory: string;
  date:string;
  categories: string[] = ['Supervivencia', 'Ocio y vicio', 'Cultura', 'Extras'];

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { 
    
  }

  message(){
    console.log("hice click en login"); 
    this._snackBar.open( "¡nuevo gasto añadido!", "", {
      duration: 2000,
    });
  }


  addExpense(){
    
    var user = firebase.auth().currentUser;
    console.log("hice click en addExpense");
    // firebase.auth().onAuthStateChanged(function(user){
      console.log("user "+user);
        if (user) {
        db.collection("usuarios").doc(user.uid).collection("expenses").add({
              name_expense: this.name_expense,
              amount: this.amount,
              category: this.chosenCategory,
              date:this.date,              
        })
      }
      this.router.navigate(['/loggedMain']);
    
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['/loggedMain']); 
  }



}
