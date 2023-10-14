import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Posts } from '../interfaces/posts-interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
