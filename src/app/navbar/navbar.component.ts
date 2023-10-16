import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/store/auth.state';
import { Auth } from 'src/store/model/auth.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private dataService: DataService, private store: Store) {}

  currentRole!: string;
  currentUser: Auth = {
    fullname: null,
    username: null,
    id: null,
    isAuth: false,
    access_token: null,
    role: 'guest',
  };
  rolesMap: Map<string, string> = new Map([
    ['user', 'Пользователь'],
    ['admin', 'Администратор'],
  ]);

  logOut() {
    this.store.reset(AuthState);
  }

  ngOnInit() {
    this.store.select(AuthState.getAuthRole).subscribe({
      next: (value) => {
        this.currentRole = value;
        this.currentUser = this.store.selectSnapshot(AuthState.getAuthObject);
      },
    });
  }
}
