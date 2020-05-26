import  {Component} from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';


@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent {
    items: Observable<any[]>;

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        var user = this.userService.getCurrentUser();
        if (user) {
            this.items = firestore.collection('usuarios').doc(user.uid).collection("incomes").valueChanges({ idField: 'eventId' });
        }
    }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }


    removeIncome(id_expense){
        console.log("hice click en removeIncome");
        var user = firebase.auth().currentUser;
        if(user){
        
                db.collection("usuarios").doc(user.uid).collection("incomes").doc(id_expense).delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            
        }
        
    }

}