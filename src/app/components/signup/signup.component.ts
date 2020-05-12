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

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth) {}

    name: string;
    surname: string;
    email: string;
    password: string;
    passwordRepeat: string;

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordRepeat').value
       ? null : {'mismatch': true};
 }


  ngOnInit(): void {
    
  }

  createUser() {
  console.log("hice click en createUser");
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(this.email,this.password);
  promise.then(function () {
    var userUid = auth.currentUser.uid;
    var db = firebase.firestore();
      db.collection('usuarios').doc(userUid).set({
        name: this.name,
        surname: this.surname,
        email: this.email,
        // password: this.user.value.password,
      });
    })
  }

}
