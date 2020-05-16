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
    private data;
    
    constructor(private userService: UserService,private router: Router,
        private ngZone: NgZone) {
    }

    ngOnInit(): void {
        var user = this.userService.getCurrentUser()
        if (user) {
            db.collection("usuarios").doc(user.uid).collection("expenses").doc("data-expenses").get()
                .then((doc) => {
                    if(doc.exists){
                        this.data = doc.data()
                        console.log(this.data)
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



