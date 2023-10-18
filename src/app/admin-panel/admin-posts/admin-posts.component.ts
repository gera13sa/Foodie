import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { animationFrameScheduler } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';
import { AuthState } from 'src/store/auth.state';

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
  constructor(
    private dataService: DataService,
    private store: Store,
    private toastr: ToastrService
  ) {}

  postsInfo!: Posts[];

  removeId!: number;

  deleteRecipe() {
    console.log(this.removeId);
    this.dataService
      .deletePost(this.store.selectSnapshot(AuthState.getToken)!, this.removeId)
      .subscribe({
        next: (value) => {
          this.toastr.success('Успешно!', 'Рецепт был успешно удалён!');
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(
            'Не удалось удалить рецепт!',
            'Ошибка ' + err.status
          );
        },
      });
  }

  ngOnInit() {
    this.dataService.getAllPosts().subscribe({
      next: (post) => {
        this.postsInfo = post;
      },
    });
  }
}
