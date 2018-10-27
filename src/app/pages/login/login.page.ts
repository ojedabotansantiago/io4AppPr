import { Component, OnInit } from '@angular/core';
import { HeaderAppComponent } from '../../components/header-app/header-app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public title: string;
  constructor() {}

  ngOnInit() {
    this.title = 'Login';
  }
}
