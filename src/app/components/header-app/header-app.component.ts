import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
})
export class HeaderAppComponent implements OnInit {
  @Input()
  title: string;
  constructor(public menuCtrl: MenuController) {}

  ngOnInit() {}

  public openMenu() {
    this.menuCtrl.open();
  }
}
