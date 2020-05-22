import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
  private router: Router,
  private ngZone: NgZone) { }

  ngOnInit(): void {
  //   this.afAuth.user.subscribe(user => {
  //     if (user==null) {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['/inicio-sin-login']);
  //     })
  // }})
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
      this.router.navigate(['inicio-sin-login']);
    }else{
      console.log("no hay usuario logeado");
    }
    
  }
  
}
