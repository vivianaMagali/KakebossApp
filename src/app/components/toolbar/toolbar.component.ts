import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild(UserProfileComponent) profile: UserProfileComponent;

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

  viewProfile(){
    this.router.navigate(['/profile']);
  }

  poll(){
    this.router.navigate(['poll']);
  }

}
