import  {Component} from '@angular/core';
import { UserService } from '../../services/userService';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent {
    items: Observable<any[]>;

    constructor(private userService: UserService,private router: Router,firestore: AngularFirestore) {
        var user = this.userService.getCurrentUser();
        if (user) {
            this.items = firestore.collection('usuarios').doc(user.uid).collection("incomes").valueChanges();
        }
    }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }
}