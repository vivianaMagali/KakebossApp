import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {

  constructor(private afAuth: AngularFireAuth,
  private router: Router,
  private ngZone: NgZone,
  private _snackBar: MatSnackBar) { }


  message(){
    console.log("hice click en login"); 
    this._snackBar.open( "¡Sesión cerrada correctamente!", "", {
      duration: 2000,
    });
  }

  signOutUser(){
    var user = firebase.auth().currentUser;
    if(user!=null){
      this.afAuth.signOut().then(function() {
        console.log("sesion cerrada correctamente");
        
        // Sign-out successful.
      }).catch(function(error) {
        console.log("la sesion no se ha cerrado correctamente");
        // An error happened.
      });
      this.router.navigate(['unloggedMain']);
    }else{
      console.log("no hay usuario logeado");
    }
    
  }
  
}
