import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '@ngxs/store';
import { AuthUpdate, User } from 'src/store/model/auth.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthState } from 'src/store/auth.state';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter, :leave', [animate('0.2s ease-out')]),
    ]),
  ],
})
export class LoginPageComponent {
  constructor(
    private dataService: DataService,
    private store: Store,
    private router: Router
  ) {}

  wrongCred: boolean = false;
  userAuthData: User = {
    username: '',
    password: '',
  };

  authorizeUser() {
    this.dataService
      .auth(this.userAuthData.username, this.userAuthData.password)
      .subscribe({
        next: (value) => {
          this.store.dispatch(
            new AuthUpdate({
              id: value.id,
              username: value.username,
              access_token: value.access_token,
              fullname: value.fullname,
              role: value.role,
              isAuth: true,
            })
          );

          this.dataService.role = this.store.selectSnapshot(
            AuthState.getAuthRole
          );
          this.router.navigateByUrl('');
        },

        error: (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.wrongCred = true;
          }
        },
      });
  }
}
