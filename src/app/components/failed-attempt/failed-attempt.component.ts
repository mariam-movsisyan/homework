import { Component } from '@angular/core';
import { availableLanguages } from 'src/app/models/availableLanguagesEnum';
import { Pages } from 'src/app/models/pages';
import { LanguageService } from 'src/app/services/language.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-failed-attempt',
  templateUrl: './failed-attempt.component.html',
  styleUrls: ['./failed-attempt.component.css']
})
export class FailedAttemptComponent {
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
