import { Component } from '@angular/core';
import { availableLanguages } from 'src/app/models/availableLanguagesEnum';
import { Pages } from 'src/app/models/pages';
import { LanguageService } from 'src/app/services/language.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  public username!: string;
  public newPassword!: string;
  public language = availableLanguages
  public availablePages = Pages;

  constructor(private _langageService: LanguageService,
    private _navigationService: NavigationService,
    public _usersService: UsersService) {
  }

  public recoverPassword(username: string, newPassword: string) {
    this._usersService.recoverPassword(username, newPassword)
    if (this._usersService.errors.length == 0) {
      this._navigationService.setActivepage(this.availablePages.LOGIN)
    }
  }

  public getErrors() {
    return this._usersService.getErrors()
  }

  public setActivePage(page: Pages) {
    this._navigationService.setActivepage(page);
  }
}
