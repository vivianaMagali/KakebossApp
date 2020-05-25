import  {Component, OnInit} from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { AngularFireDatabase } from 'angularfire2/database';

export interface Expense {
    category: string;
    name_expense: string;
    date: string;
    amount:number;
  }


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent implements OnInit{

    displayedColumns: string[] = ['name', 'amount'];
    dataSource: MatTableDataSource<Expense>;
    public items: Observable<any[]>;
    public gastos: Array<Expense> = [];
    // amount:string;
    // category:string;
    // date:string;
    // name:string;

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         // this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges().subscribe(amounts => {amounts.forEach(exp => {this.gastos.push(exp);})
        //         //     this.dataSource = new MatTableDataSource(this.gastos);
        //         // });
        //         this.items=db.collection('usuarios').doc(user.uid).collection("expenses").onSnapshot;
        //         this.items.subscribe(expenses => {expenses.forEach(gasto => {
        //               this.gastos.push(gasto);
        //             })
        //             this.dataSource = new MatTableDataSource(this.gastos);
        //         })
        //         this.dataSource = new MatTableDataSource(this.gastos);
        //     }
        // })
        
    }

    ngOnInit(): void {
        
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         db.collection("usuarios").doc(user.uid).collection("expenses").get().then(function(querySnapshot) {
        //             querySnapshot.forEach(function(doc) {
                        
                        
        //                 // return doc.data().amount;
        //                 // this.docs.push(doc.data());
                      
        //                 // this.amounts.push(doc.data().amount);
        //                 // console.log(this.amounts);
        //                 //console.log(doc.id, " => ", doc.data());
        //             });
       
        //         });
              
        //     }else{
        //             console.log("No hay usuario")
        //     }
        // })
     
    }

    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

}



