import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pwd: ['', Validators.required],
    pwdSecure: ['', Validators.required]
  });
  public title: string;
  public user: User;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.title = 'Login';
  }
  public logForm() {
    console.log(this.loginForm.value);
  }
}
