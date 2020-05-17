import  {Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { db } from 'src/app/services/utils/firebase';
import { UserService } from '../../services/userService'
import { Router } from '@angular/router';

@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent implements OnInit{
    //public data :Array<User> = [];
    amount:string;
    category:string;
    date:string;
    name:string;
    
    constructor(private userService: UserService,private router: Router) {
    }

    ngOnInit(): void {
        var user = this.userService.getCurrentUser();
        if (user) {
            db.collection("usuarios").doc(user.uid).collection("expenses").doc("data-expenses").get()
                .then((doc) => {
                    if(doc.exists){
                        this.amount = doc.data().amount;
                        this.name = doc.data().name_expense;
                        this.date = doc.data().date;
                        console.log(this.amount);
                        console.log(this.name);
                        console.log(this.date);
                        //this.dataSource = new MatTableDataSource(this.amount);
                        //console.log(this.data)
                    }else{
                        console.log("doc no existe")
                    }
                })
        }else{
                console.log("No hay usuario")
        }
    }

    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

}



