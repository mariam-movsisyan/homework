import { Injectable } from '@angular/core';
import { Pages } from '../models/pages';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activPage: Pages = Pages.CONFIRMATION;

  public setActivepage(page: Pages) {
    this.activPage = page;
  }

  public getActivePage(): Pages {
    return this.activPage;
  }
}
