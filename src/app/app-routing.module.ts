import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RecipeDetailsComponent } from './recipes-page/recipe-details/recipe-details.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AccessForbidenPageComponent } from './error-pages/access-forbiden-page/access-forbiden-page.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';

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
    path: 'recipe',
    component: RecipesPageComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '401',
    component: AccessForbidenPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
