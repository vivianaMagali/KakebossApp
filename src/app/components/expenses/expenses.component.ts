import { Component, OnInit, NgZone } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Routes, RouterModule, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    
  }


  addExpense(){
    
    // var user = firebase.auth().currentUser;
    console.log("hice click en addExpense");
    firebase.auth().onAuthStateChanged(function(user){
        if (user) {
        db.collection("usuarios").doc(user.uid).collection("expenses").doc("data-expenses").set({
              name_expense: this.name_expense,
              amount: this.amount,
              category: this.chosenCategory,
              date:this.date
        })
      }
    })
    this.router.navigate(['/inicio']);
  }



}
