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
 
  ngOnInit() {}


  login() { 
    console.log("hice click en login"); 
    
    this.afAuth.signInWithEmailAndPassword(this.username, this.password).then(() => {
      this.router.navigate(['/inicio']);
    }).catch(response => {
      this.errorMessage = response.message;
      console.log("ERROR MSG: ", this.errorMessage)
      
      });
    
  }

  cancel(){
    //enroutamiento a pagina principal
    this.router.navigate(['/inicio']); 
  }

}
