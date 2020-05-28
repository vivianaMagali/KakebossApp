import  {Component, ViewChild} from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent {
    items: Observable<any[]>;
    @ViewChild(DialogComponent) modal: DialogComponent;

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore,public dialog: MatDialog) {
        var user = this.userService.getCurrentUser();
        if (user) {
            this.items = firestore.collection('usuarios').doc(user.uid).collection("incomes").valueChanges({ idField: 'eventId' });
        }
    }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }


    openDialog(id_income) {
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.remove(id_income);
        });
        
      }


    remove(id_income){
        var user = firebase.auth().currentUser;
        if(user){
            db.collection("usuarios").doc(user.uid).collection("incomes").doc(id_income).delete().then(function() {
            }).catch(function(error) {
            });
        }
    }

}