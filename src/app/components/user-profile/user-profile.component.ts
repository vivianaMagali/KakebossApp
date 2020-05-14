import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { db } from 'src/app/services/utils/firebase';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  constructor() { }

  hide = true;
  name: string;
  surname: string;
  email:string;
  password:string;

  ngOnInit(): void {}

  modifiedProfile(){
    var user = firebase.auth().currentUser;
    if(user){
      console.log("modifique datos perfil");
        db.collection("usuarios").doc(user.uid).collection("datos").doc("datos-perfil").set({
          name:this.name,
          surname:this.surname,
        });
    }
  }


  modifiedPassword(){
    var user = firebase.auth().currentUser;

    user.updatePassword(this.password).then(function() {
      console.log("contraseña actualizada");
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  modifiedEmail(){
    var user = firebase.auth().currentUser;

    user.updateEmail(this.email).then(function() {
      console.log("email actualizado");
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }


}
