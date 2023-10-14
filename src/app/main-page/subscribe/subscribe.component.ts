import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  emailString: string | null = '';
  subscribed: boolean = false;

  subscribeUser() {
    this.subscribed = true;
  }
}
