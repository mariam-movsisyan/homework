import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ConfirmationComponent,
  FailedAttemptComponent,
  LoginComponent,
  MainLayoutComponent,
  RegistrationComponent
} from './components';
import { ShowErrorsDirective } from './directives/showErrors.directive';
import { TranslatePipe } from './pipes/translate.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    ConfirmationComponent,
    RegistrationComponent,
    FailedAttemptComponent,
    TranslatePipe,
    ShowErrorsDirective,
    HomePageComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
