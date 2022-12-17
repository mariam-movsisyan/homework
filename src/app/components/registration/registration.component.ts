import { Component } from '@angular/core';
import { availableLanguages } from 'src/app/models/availableLanguagesEnum';
import { Pages } from 'src/app/models/pages';
import { LanguageService } from 'src/app/services/language.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public username!: string;
  public password!: string;
  public confirmPassword!: string;
  public language = availableLanguages
  public availablePages = Pages;
  public isExsistError: boolean = false

  constructor(private _langageService: LanguageService,
    private _navigationService: NavigationService,
    public _usersService: UsersService) {

  }
  public getSaveUsers(username: string, password: string, confirmPassword: string) {
    this._usersService.saveUsers({ username, password, confirmPassword })
    if (this._usersService.succesfull === true) {
      this.setActivePage(this.availablePages.LOGIN)
    }
  }
  public getErrors() {
    return this._usersService.getErrors()
  }

  public setActivePage(page: Pages) {
    this._navigationService.setActivepage(page);
  }


}
