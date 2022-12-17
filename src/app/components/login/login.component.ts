import { Component } from '@angular/core';
import { availableLanguages } from 'src/app/models/availableLanguagesEnum';
import { Pages } from 'src/app/models/pages';
import { User } from 'src/app/models/users';
import { LanguageService } from 'src/app/services/language.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username!: string;
  public password!: string;
  public language = availableLanguages
  public availablePages = Pages;
  public isExsistError: boolean = false
  public failedAttempts: number = 0;


  constructor(private _langageService: LanguageService,
    private _navigationService: NavigationService,
    public _usersService: UsersService) {

  }
  public goHomePage(page: Pages, username: string, password: string) {
    this._usersService.login(username, password)
    if (this._usersService.succesfull === true) {
      this.setActivePage(page)
    } else {
      this.failedAttempts += 1;
    }
    if (this.failedAttempts >= 3) {
      this.getErrors().length = 0
      this.setActivePage(this.availablePages.FAILED_ATTEMPT)

    }
  }

  public getErrors() {
    return this._usersService.getErrors()
  }

  public setActivePage(page: Pages) {
    this._navigationService.setActivepage(page);
  }

}
