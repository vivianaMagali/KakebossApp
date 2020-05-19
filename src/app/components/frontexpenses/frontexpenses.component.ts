import  {Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { db } from 'src/app/services/utils/firebase';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent implements OnInit{
    items: Observable<any[]>;
    
    //public data :Array<User> = [];
    // displayedColumns: string[] = ['name','amount'];
    // dataSource: MatTableDataSource<User>;
    amount:string;
    category:string;
    date:string;
    name:string;

    // public docs: [];

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        // this.items = db.collection('usuarios').doc(user.uid).collection("expenses").valueChanges();
        var usuario = this.userService.getCurrentUser();
        if (usuario) {
         this.items = firestore.collection('usuarios').doc(usuario.uid).collection("expenses").valueChanges();
        }
    }

    ngOnInit(): void {
        var user = this.userService.getCurrentUser();
        if (user) {
            db.collection("usuarios").doc(user.uid).collection("expenses").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // this.items
                    // doc.data() is never undefined for query doc snapshots
                    // this.docs.push(doc.data());
                    this.items.push(doc.data());
                    
                    console.log(doc.id, " => ", doc.data());
                });
                // this.dataSource = new MatTableDataSource(this.docs);
                
            });
            console.log(this.items);
        }else{
                console.log("No hay usuario")
        }
    }

    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

}



