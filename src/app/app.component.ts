import { Component, OnInit, NgZone,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Kakeboss';
  items: Observable<any[]>;
 
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('usuarios').valueChanges();

  }


  // ngOnInit(): void {
  //   firebase.auth().onAuthStateChanged(function(user){
  //     if (user!=null) {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['/inicio-sin-login']);
  //       })
  //     }
  //   })
  // }

}


