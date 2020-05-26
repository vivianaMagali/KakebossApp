import { Component, OnInit, NgZone } from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { Routes, RouterModule, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore/firestore';


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

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    
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
      this.router.navigate(['/inicio']);
    
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['/inicio']); 
  }



}
