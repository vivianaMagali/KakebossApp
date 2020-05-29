import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  public items: Observable<any[]>;
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    this.dialogRef.disableClose = true;
  }

  accept(): void {
    this.dialogRef.close();
  }

}
