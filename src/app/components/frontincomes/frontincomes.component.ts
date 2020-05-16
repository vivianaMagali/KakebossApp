import  {Component, NgZone, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/userService';
import { Router } from '@angular/router';
import { db } from 'src/app/services/utils/firebase';

@Component({
    selector: 'app-frontincomes',
    templateUrl: './frontincomes.component.html',
    styleUrls: ['./frontincomes.component.css'],
})
export class frontIncomesComponent {

    private data;

    constructor(private userService: UserService,private router: Router) {
    }

    // ngOnInit(): void {
    //     var user = this.userService.getCurrentUser()
    //     if (user) {
    //         db.collection("usuarios").doc(user.uid).collection("incomes").doc("data-incomes").get()
    //             .then((doc) => {
    //                 if(doc.exists){
    //                     this.data = doc.data()
    //                     console.log(this.data)
    //                 }else{
    //                     console.log("doc no existe")
    //                 }
    //             })
    //     }else{
    //             console.log("No hay usuario")
    //     }
    // }

    addNewIncomes(){
        this.router.navigate(['/incomes']);
    }
}