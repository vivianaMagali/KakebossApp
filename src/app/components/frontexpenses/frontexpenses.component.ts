import  {Component} from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-frontexpenses',
    templateUrl: './frontexpenses.component.html',
    styleUrls: ['./frontexpenses.component.css'],

})
export class frontExpensesComponent {

    public items: Observable<any[]>;

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        var user = this.userService.getCurrentUser();
        if (user) {
            this.items = firestore.collection('usuarios').doc(user.uid).collection("expenses").valueChanges();
        }
    }


    addNewExpense(){
        this.router.navigate(['/expenses']);
    }

}



