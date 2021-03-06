import  {Component, ViewChild} from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



// interface SelectCategory {
//     categoryValue$: boolean;
// }


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})

export class frontExpensesComponent {

    public items: Observable<any[]>;
    public cat:Observable<any[]>;
    categoryValue$: boolean=false;
    @ViewChild(DialogComponent) modal: DialogComponent;
    panelOpenState = false;
    

    constructor(private userService: UserService,private router: Router,private firestore: AngularFirestore,public dialog: MatDialog) {
        var user = this.userService.getCurrentUser();
        if (user) {
            if(this.categoryValue$===false){
                console.log("no se buscó por filtro");
                this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges({ idField: 'eventId' });
            }
        }
    }


    showExpensesByCategory(vecs_ids){
        var user = this.userService.getCurrentUser();
        if (user) {
            if(this.categoryValue$===true){
                console.log("entro en showExpensesByCategory");
                //var query = db.collection('usuarios').doc(user.uid).collection("expenses").where("category", "==", "Supervivencia");
                //db.collection('usuarios').doc(user.uid).collection("expenses").onSnapshot;
                //this.cat = db.collection('usuarios').doc(user.uid).collection("expenses").where("category", "==", "Supervivencia")
            }
        }
    }
    
    // changeCategory(category) {
    //     this.categoryValue = category;
    // }

    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

    openDialog(id_expense) {
        const dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.remove(id_expense);
            console.log('The dialog was closed');
        });
        
      }


    remove(id_expense){
        var user = firebase.auth().currentUser;
        if(user){
            db.collection("usuarios").doc(user.uid).collection("expenses").doc(id_expense).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });   
        }
    }


    showExpense(eventId){

    }


    getExpenseByOcio(){
        this.categoryValue$ = true;
        var user = firebase.auth().currentUser;
        var vec=[];
        if(user){
          db.collection("usuarios").doc(user.uid).collection("expenses").where("category", "==", "Ocio y vicio")
          .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                vec.push(doc.id);
            });
            console.log(vec);
        })
        this.showExpensesByCategory(vec);
        }
      }


    //   getExpenseByCultura(){
    //     this.categoryValue$ = true;
    //     var user = firebase.auth().currentUser;
    //     var vec=[];
    //     if(user){
    //       db.collection("usuarios").doc(user.uid).collection("expenses").where("category", "==", "Cultura")
    //       .get()
    //       .then(function(querySnapshot) {
    //           querySnapshot.forEach(function(doc) {
    //               console.log(doc.id, " => ", doc.data());
    //           });
    //       })
    //       .catch(function(error) {
    //           console.log("Error getting documents: ", error);
    //       });
    //       this.showExpensesByCategory();
    //     }
    //   }


    //   getExpenseByExtras(){
    //     this.categoryValue$ = true;
    //     var user = firebase.auth().currentUser;
    //     var vec=[];
    //     if(user){
    //       db.collection("usuarios").doc(user.uid).collection("expenses").where("category", "==", "Extras")
    //       .get()
    //       .then(function(querySnapshot) {
    //           querySnapshot.forEach(function(doc) {
    //               console.log(doc.id, " => ", doc.data());
    //           });
    //       })
    //       .catch(function(error) {
    //           console.log("Error getting documents: ", error);
    //       });
    //       this.showExpensesByCategory();
    //    }
      


}



