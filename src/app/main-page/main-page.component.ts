import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Posts } from '../interfaces/posts-interface';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dataService: DataService, private meta: Meta) {
    this.meta.updateTag({
      name: 'og:description',
      content: 'Сборник кулинарных рецептов, для всей семьи',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Foodie: Главная',
    });
  }

  ngOnInit() {}
}
