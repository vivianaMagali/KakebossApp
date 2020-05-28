import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  hide = true;
  errorMessage:string='';
  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private _snackBar: MatSnackBar) {}

    name: string;
    surname: string;
    email: string;
    password: string;
    passwordRepeat: string;

    
  getErrorMessage() {
    if (this.password === this.passwordRepeat){
        return true;
    }else{
      this.errorMessage="The passwords are wrong";
      return false;
    }
 }

 message(){
  console.log("hice click en login"); 
  this._snackBar.open( "Usuario registrado!", "", {
    duration: 2000,
  });
}

  ngOnInit(): void {}

  createUser() {
  console.log("hice click en createUser");
  if(this.getErrorMessage()){
    this.afAuth.createUserWithEmailAndPassword(this.email,this.password).then((response) => {
      var userUid = firebase.auth().currentUser.uid;
      var db = firebase.firestore();
        db.collection('usuarios').doc(userUid).collection("datos").doc("datos-perfil").set({
          name: this.name,
          surname: this.surname
        });
      })
      this.router.navigate(['/loggedMain']); 
    }else{
      console.log("no pude crear usuario por contraseñas no iguales");
    }
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['/loggedMain']); 
  }



}
