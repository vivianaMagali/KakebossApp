import  {Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { db } from 'src/app/services/utils/firebase';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent implements OnInit{
    items: Observable<any[]>;
    
    //public data :Array<User> = [];
   
    amount:string;
    category:string;
    date:string;
    name:string;
    public amounts:Array<number>=[30];
    // public docs: [];

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //     this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges();
        //     }
        // })
    }

    ngOnInit(): void {
        
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         db.collection("usuarios").doc(user.uid).collection("expenses").get().then(function(querySnapshot) {
        //             querySnapshot.forEach(function(doc) {
        //                 // this.items
        //                 // doc.data() is never undefined for query doc snapshots
        //                 // this.docs.push(doc.data());
        //                 this.items.push(doc.data());
        //                 this.amounts.push(doc.data().amount);
        //                 console.log(this.amounts);
        //                 console.log(doc.id, " => ", doc.data().amount);
        //             });
       
                    
        //         });
        //         //console.log(this.items);
        //     }else{
        //             console.log("No hay usuario")
        //     }
        // })
    }

    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

}



