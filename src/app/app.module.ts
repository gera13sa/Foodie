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
import { CustomNotificationComponent } from './main-page/custom-notification/custom-notification.component';
import { ToastrModule } from 'ngx-toastr';
import { WhyUsComponent } from './main-page/why-us/why-us.component';
import { SubscribeComponent } from './main-page/subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    SliderComponent,
    BestRecepiesComponent,
    TryRecipesComponent,
    CustomNotificationComponent,
    WhyUsComponent,
    SubscribeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      enableHtml: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
