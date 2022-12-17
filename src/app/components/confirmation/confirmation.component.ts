import { Component } from '@angular/core';
import { Pages } from 'src/app/models/pages';
import { LanguageService } from 'src/app/services/language.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { availableLanguages } from '../../models/availableLanguagesEnum'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  public language = availableLanguages
  public availablePages = Pages;

  constructor(private _langageService: LanguageService,
    private _navigationService: NavigationService
  ) {
  }

  public setTranslations(language: availableLanguages) {
    return this._langageService.setLanguage(language)
  }

  public setActivePage(page: Pages) {
    this._navigationService.setActivepage(page);
  }

}
