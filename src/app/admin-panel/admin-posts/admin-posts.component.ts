import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { animationFrameScheduler } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class AdminPostsComponent {
  constructor(private dataService: DataService, private store: Store) {}

  postsInfo!: Posts[];

  ngOnInit() {
    this.dataService.getAllPosts().subscribe({
      next: (post) => {
        this.postsInfo = post;
      },
    });
  }
}
