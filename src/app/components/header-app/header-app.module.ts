import { HeaderAppComponent } from './header-app.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule.forRoot()],
  declarations: [HeaderAppComponent],
  exports: [HeaderAppComponent]
})
export class HeaderAppModule {}
