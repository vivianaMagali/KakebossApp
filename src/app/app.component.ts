import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//esto no iria aqui
// export interface User {
//   userId: string; // <--
// }

export class AppComponent {
  title = 'Kakeboss';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore,  private afAuth: AngularFireAuth) {
    this.items = firestore.collection('usuarios').valueChanges();
  }
}

// user: User;

// ngOnInit() {
//   this.todoForm = this.formBuilder.group({
//     title: ['', Validators.required],
//     description: ['', Validators.required],
//     done: false
//   });

//   if (!this.createMode) { this.loadTodo(this.todo); }

//   this.afAuth.user.subscribe(user => {
//      if (user){
//        this.user = user;
//      }
//    })
// }