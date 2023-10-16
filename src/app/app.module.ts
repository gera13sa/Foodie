import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SliderComponent } from './main-page/slider/slider.component';
import { BestRecepiesComponent } from './main-page/best-recepies/best-recepies.component';
import { TryRecipesComponent } from './main-page/try-recipes/try-recipes.component';
import { ToastrModule } from 'ngx-toastr';
import { WhyUsComponent } from './main-page/why-us/why-us.component';
import { SubscribeComponent } from './main-page/subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/store/auth.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxsReduxDevtoolsPlugin,
  NgxsReduxDevtoolsPluginModule,
} from '@ngxs/devtools-plugin';
import { FavoritesState } from 'src/store/favorites.state';
import { RecipeDetailsComponent } from './recipes-page/recipe-details/recipe-details.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AccessForbidenPageComponent } from './error-pages/access-forbiden-page/access-forbiden-page.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    SliderComponent,
    BestRecepiesComponent,
    TryRecipesComponent,
    WhyUsComponent,
    SubscribeComponent,
    FooterComponent,
    LoginPageComponent,
    RecipeDetailsComponent,
    RegistrationPageComponent,
    AccessForbidenPageComponent,
    PageNotFoundComponent,
    RecipesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthState, FavoritesState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 5000,
      easeTime: 200,
      easing: 'ease-in',
      closeButton: true,
      countDuplicates: true,
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
