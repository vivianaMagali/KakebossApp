import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators,FormControl} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { db } from 'src/app/services/utils/firebase';
import * as firebase from 'firebase';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 errorMessage = '';
 hide = true;
 email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

 constructor(private afAuth: AngularFireAuth,
   private router: Router,
   private fb: FormBuilder,
   private ngZone: NgZone) { }

 loginForm = this.fb.group({
   username: ['', Validators.required],
   password: ['', Validators.required]
 })

 
 ngOnInit() {
  this.afAuth.user.subscribe(user => {
    if (user) {
      this.ngZone.run(() => {
        this.router.navigate(['/inicio']);
    })
}})
}



// createUser() {
//   this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password)
//   .then((response) => {
//     var userUid = firebase.auth().currentUser.uid;
//     var db = firebase.firestore();
//     db.collection('usuarios').doc(userUid);
//   })
// }


signIn() { 
  
  this.afAuth.signInWithEmailAndPassword(this.loginForm.value.username, this.loginForm.value.password).then(() => {
    //this.router.navigate(['/inicio']);
   }).catch(response => {
     this.errorMessage = response.message;
     console.log("ERROR MSG: ", this.errorMessage)
    });
}

}
