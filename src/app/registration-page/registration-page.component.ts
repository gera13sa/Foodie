import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { UserReg } from '../interfaces/users-interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
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
          if (err.status === 404) {
            this.wrongCred = true;
          }
        },
      });
  }

  ngOnInit() {}
}
