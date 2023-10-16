import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserReg } from '../interfaces/users-interface';
import { HttpErrorResponse } from '@angular/common/http';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter, :leave', [animate('0.2s ease-out')]),
    ]),
  ],
})
export class RegistrationPageComponent {
  constructor(private dataService: DataService, private router: Router) {}

  wrongCred: boolean = false;
  userRegisterData: UserReg = {
    email: '',
    password: '',
  };

  registerUser() {
    this.dataService
      .register(this.userRegisterData.email, this.userRegisterData.password)
      .subscribe({
        next: (value) => {
          this.router.navigateByUrl('');
        },

        error: (err: HttpErrorResponse) => {
          if (err.status === 400) {
            this.wrongCred = true;
          }
        },
      });
  }

  ngOnInit() {}
}
