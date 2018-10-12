import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../../pages/home/home.module';
import { AboutPageModule } from '../../pages/about/about.module';
import { ContactPageModule } from '../../pages/contact/contact.module';
import { LoginPageModule } from '../../pages/login/login.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    LoginPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
