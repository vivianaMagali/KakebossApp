import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: FormGroup;
  
  
 

  constructor(private fb: FormBuilder) { }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordRepeat').value
       ? null : {'mismatch': true};
 }

  ngOnInit(): void {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });
  }

  


}
