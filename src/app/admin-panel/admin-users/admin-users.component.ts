import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { DataService } from 'src/app/data.service';
import { Users } from 'src/app/interfaces/users-interface';
import { AuthState } from 'src/store/auth.state';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class AdminUsersComponent {
  constructor(private dataService: DataService, private store: Store) {}

  usersInfo!: Users[];
  rolesMap: Map<string, string> = new Map([
    ['user', 'Пользователь'],
    ['admin', 'Администратор'],
  ]);

  ngOnInit() {
    this.dataService
      .getAllUsers(this.store.selectSnapshot(AuthState.getToken)!)
      .subscribe({
        next: (users) => {
          this.usersInfo = users;
        },
      });
  }
}
