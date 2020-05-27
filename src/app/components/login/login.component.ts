import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css'],
})

@Injectable()
export class LoginComponent {
  errorMessage = '';
  username:string;
  password:string;

 constructor(private afAuth: AngularFireAuth,
   private router: Router,
   private _snackBar: MatSnackBar) {
 }


 message(){
  console.log("hice click en login"); 
  this._snackBar.open( "¡Bienvenido a Kakeboss!", "", {
    duration: 2000,
  });
}

  login() { 
    this.afAuth.signInWithEmailAndPassword(this.username, this.password).then(() => {
      this.router.navigate(['/inicio']);
    }).catch(response => {
      this.errorMessage = response.message;
      console.log("ERROR MSG: ", this.errorMessage)
      
      });
    
  }

  cancel(){
    this.router.navigate(['/inicio']); 
  }

}
