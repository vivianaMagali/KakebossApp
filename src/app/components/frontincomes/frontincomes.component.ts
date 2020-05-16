import  {Component, NgZone} from '@angular/core';
import { UserService } from 'src/app/services/userService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent{

    constructor(private userService: UserService,private router: Router,
        private ngZone: NgZone) {
    }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }
}