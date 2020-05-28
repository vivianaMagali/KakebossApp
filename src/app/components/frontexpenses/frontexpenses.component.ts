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
   
    // categories: Category[] = [
    //     {value: 'cat-0', viewValue: 'Supervivencia'},
    //     {value: 'cat-1', viewValue: 'Ocio y vicio'},
    //     {value: 'cat-2', viewValue: 'Cultura'},
    //     {value: 'cat-3', viewValue: 'Extras'}
    //   ];
    

    // openDialog() {
    //     const dialogRef = this.dialog.open(DialogComponent);
    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //     });
    // } 


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
        const dialogRef = this.dialog.open(DialogComponent,id_expense);
        
        
        dialogRef.afterClosed().subscribe(result => {
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

   


    // getExpenseByCategory(){
    //     this.categoryValue=true;
    //     var user = firebase.auth().currentUser;
    //     if(user){
    //       console.log("hay usuario");
    //       db.collection("usuarios").doc(user.uid).collection("expenses").where("category", "==", this.categories.values)
    //       .get()
    //       .then(function(querySnapshot) {
    //           querySnapshot.forEach(function(doc) {
    //               console.log(doc.id, " => ", doc.data());
    //           });
    //       })
    //       .catch(function(error) {
    //           console.log("Error getting documents: ", error);
    //       });
    //     }
    //   }


    // function show() {
    //     let li_name=document.createElement('li');
    // }

    getExpenseBySupervivencia(){
        this.categoryValue$ = true;
        var user = firebase.auth().currentUser;
        var vec=[];
        if(user){
          db.collection("usuarios").doc(user.uid).collection("expenses").where("category", "==", "Supervivencia")
          .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                vec.push(doc.id);
            });
            })
            console.log(vec);
            this.showExpensesByCategory(vec);
        }
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



