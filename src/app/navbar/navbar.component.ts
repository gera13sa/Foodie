import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/store/auth.state';
import { Auth } from 'src/store/model/auth.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter, :leave', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class NavbarComponent {
  constructor(
    private store: Store,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  isErrorPage: boolean = false;

  currentRole!: string;
  currentUser: Auth = {
    fullname: null,
    username: null,
    id: null,
    isAuth: false,
    access_token: null,
    role: 'guest',
    image: null,
  };

  rolesMap: Map<string, string> = new Map([
    ['user', 'Пользователь'],
    ['admin', 'Администратор'],
  ]);

  logOut() {
    this.store.reset(AuthState);
    this.router.navigate(['auth']);
  }
  stop(event: any) {
    event.stopPropagation();
  }

  ngOnInit() {
    this.store.select(AuthState.getAuthRole).subscribe({
      next: (value) => {
        this.currentRole = value;
        this.currentUser = this.store.selectSnapshot(AuthState.getAuthObject);
        console.log(this.currentUser);
      },
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isErrorPage =
          this.activeRouter.snapshot.firstChild?.routeConfig?.path === '404' ||
          this.activeRouter.snapshot.firstChild?.routeConfig?.path === '401';
      }
    });
  }
}
