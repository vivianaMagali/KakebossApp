import  { Component } from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent {

    public items: Observable<any[]>;
   

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        var user = this.userService.getCurrentUser();
        if (user) {
            this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges({ idField: 'eventId' });

        }
    }


    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

    removeExpense(id_expense){
        console.log("hice click en removeExpense");
        var user = firebase.auth().currentUser;
        if(user){
        
                db.collection("usuarios").doc(user.uid).collection("expenses").doc(id_expense).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            
        }
        
    }


}



