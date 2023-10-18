import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  constructor(private activatedRouter: ActivatedRoute) {}

  onEditPage: boolean = false;

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        if (param.get('id')) this.onEditPage = true;
      },
    });
  }
}
