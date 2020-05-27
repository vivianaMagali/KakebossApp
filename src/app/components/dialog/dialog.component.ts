import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/userService';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  public items: Observable<any[]>;
  
  constructor(private userService: UserService,private router: Router,private firestore: AngularFirestore,public dialogRef: MatDialogRef<DialogComponent>) { 
    var user = this.userService.getCurrentUser();
        if (user) {
            console.log("no se buscó por filtro");
            this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges({ idField: 'eventId' });
        }
        
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){
    var user = firebase.auth().currentUser;
    if(user){
        db.collection("usuarios").doc(user.uid).collection("expenses").doc().delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}

}
