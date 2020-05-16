import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

  sign_up(){
    this.router.navigate(['/signup']);
  }

}
