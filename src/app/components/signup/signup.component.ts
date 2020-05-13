import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  errorMessage:string='';
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth) {}

    name: string;
    surname: string;
    email: string;
    password: string;
    passwordRepeat: string;

    
  getErrorMessage() {
    if (this.password === this.passwordRepeat){
        return true;
    }else{
      this.errorMessage="the passwords are wrong";
      return false;
    }
 }


  ngOnInit(): void {
    
  }

  createUser() {
  console.log("hice click en createUser");
  if(this.getErrorMessage()){
    this.afAuth.createUserWithEmailAndPassword(this.email,this.password).then((response) => {
      var userUid = firebase.auth().currentUser.uid;
      var db = firebase.firestore();
        db.collection('usuarios').doc(userUid).collection("datos").add({
          name: this.name,
          surname: this.surname
        });
      })
  }else{
    console.log("no pude crear usuario por contraseñas no iguales");
  }
  

  }

}
