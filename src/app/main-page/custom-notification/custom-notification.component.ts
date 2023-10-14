import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.css'],
})
export class CustomNotificationComponent {
  @Input() message!: string;
}
