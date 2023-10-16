import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-access-forbiden-page',
  templateUrl: './access-forbiden-page.component.html',
  styleUrls: ['./access-forbiden-page.component.css'],
})
export class AccessForbidenPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
