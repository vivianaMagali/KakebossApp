import  {Component, OnInit} from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';



@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent {
    items: Observable<any[]>;
    // private data;
    amount:string;
    category:string;
    date:string;
    name:string;

    constructor(private userService: UserService,private router: Router) {
        
    }

    ngOnInit(): void {
        var user = this.userService.getCurrentUser()
        if (user) {
            db.collection("usuarios").doc(user.uid).collection("incomes").doc("data-incomes").get()
                .then((doc) => {
                    if(doc.exists){
                        // this.data = doc.data()
                        // console.log(this.data)
                        this.amount = doc.data().amount;
                        this.name = doc.data().name_income;
                        this.date = doc.data().date;
                        console.log(this.amount);
                        console.log(this.name);
                        console.log(this.date);
                    }else{
                        console.log("doc no existe")
                    }
                })
        }else{
                console.log("No hay usuario")
        }
    }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }
}