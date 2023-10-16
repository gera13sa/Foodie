import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Главная страница',
  },
  {
    path: 'auth',
    component: LoginPageComponent,
    title: 'Авторизация',
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
    title: 'Регистрация',
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
