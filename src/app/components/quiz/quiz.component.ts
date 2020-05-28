import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { db } from 'src/app/services/utils/firebase';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
})

export class quiz{
    monthlyObjectives:string;
    monthlyPromises:string;
    keepsIntact:string;
    comments:string;
    
    constructor(private router: Router,
        private _snackBar: MatSnackBar) {   
    }

    message(){
        this._snackBar.open( "Poll done!", "", {
          duration: 2000,
        });
    }

    quizDone(){
    
        var user = firebase.auth().currentUser;
        console.log("hice click en quiz");
        // firebase.auth().onAuthStateChanged(function(user){
        console.log("user "+user);
        if (user) {
            db.collection("usuarios").doc(user.uid).collection("quiz").add({
                monthlyObjectives:this.monthlyObjectives,
                monthlyPromises:this.monthlyPromises,
                keepsIntact:this.keepsIntact,
                comments:this.comments
            })
        }
        this.message();
        this.router.navigate(['/loggedMain']);
        
    }

    cancel(){
        //enroutamiento a pagina principal
        this.router.navigate(['/loggedMain']); 
      }
}