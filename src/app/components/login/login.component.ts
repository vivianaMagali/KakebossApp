import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage = '';
  username:string;
  password:string;

 constructor(private afAuth: AngularFireAuth,
   private router: Router,
   private ngZone: NgZone) { }
 
  ngOnInit() {
    // this.afAuth.user.subscribe(user => {
    //   if (user) {
    //     this.ngZone.run(() => {
    //       this.router.navigate(['/inicio']);
    //   });
    // }});
  }


  login() { 
    console.log("hice click en login"); 
    
    this.afAuth.signInWithEmailAndPassword(this.username, this.password).then(() => {}).catch(response => {
      this.errorMessage = response.message;
      console.log("ERROR MSG: ", this.errorMessage)
      });
    this.router.navigate(['/inicio']);
  }

}
