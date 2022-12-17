import { Component } from '@angular/core';
import { Pages } from './models/pages';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  public activePage!: Pages
  public availablePages = Pages;

  constructor(private _navigation: NavigationService) {
  }

  public getActivePage(): Pages {
    return this.activePage = this._navigation.getActivePage();
  }
}
