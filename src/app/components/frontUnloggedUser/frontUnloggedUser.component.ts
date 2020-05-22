import  {Component, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-frontUU',
    templateUrl: './frontUnloggedUser.component.html',
    styleUrls: ['./frontUnloggedUser.component.css'],
})
export class frontUUComponent{

    constructor(private afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone) { }

    signup(){
        this.router.navigate(['/signup']);
    }

}