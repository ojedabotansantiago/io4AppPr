import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { HeaderAppModule } from '../../components/header-app/header-app.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    HeaderAppModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
