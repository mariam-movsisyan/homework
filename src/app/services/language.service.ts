import { Injectable } from '@angular/core';
import { AM } from '../components/translations/armenian';
import { ENG } from '../components/translations/english';
import { availableLanguages } from '../models/availableLanguagesEnum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  _currentTranslation: any = ENG

  public allTranslations = {
    ENG,
    AM
  }

  public setLanguage(language: availableLanguages): void {
    this._currentTranslation = this.allTranslations[language]
  }

  public getTranslation() {
    return this._currentTranslation
  }
}