import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { HeaderAppModule } from '../../components/header-app/header-app.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    HeaderAppModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
