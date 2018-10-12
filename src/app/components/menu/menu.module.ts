import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';

import { LoginPage } from '../../pages/login/login.page';
import { HomePage } from '../../pages/home/home.page';
import { AboutPage } from '../../pages/about/about.page';
import { ContactPage } from '../../pages/contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(login:login)',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'login',
        outlet: 'login',
        component: LoginPage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(login:login)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuComponentModule {}
