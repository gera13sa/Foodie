import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, filter, map } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';
import { FavoritesState } from 'src/store/favorites.state';
import { FavoriteUpdate } from 'src/store/model/favorites.model';

@Component({
  selector: 'app-recipe-catalog',
  templateUrl: './recipe-catalog.component.html',
  styleUrls: ['./recipe-catalog.component.css'],
  animations: [
    trigger('fadeInDown', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter, :leave', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class RecipeCatalogComponent {
  constructor(
    private dataService: DataService,
    private meta: Meta,
    private store: Store,
    private toastr: ToastrService,
    private activatedRouter: ActivatedRoute
  ) {
    this.meta.updateTag({
      name: 'og:title',
      content: 'Foodie: Каталог рецептов',
    });
    this.meta.updateTag({
      name: 'og:description',
      content: 'Все самые лучшие рецепты собраны здесь',
    });
  }

  searchText: string = '';

  postsInfo!: Posts[];
  filteredPosts!: Posts[];
  favoriteRecipes!: number[];

  favoriteUpdate(_id: number) {
    this.store.dispatch(new FavoriteUpdate(_id));
    if (this.favoriteRecipes.includes(_id))
      this.toastr.success(
        'Добавлено в избранное',
        'Сохранили этот рецепт для вас'
      );
  }

  ngOnInit() {
    this.dataService.getAllPosts().subscribe({
      next: (post) => {
        this.postsInfo = post;
      },
    });

    this.store.select(FavoritesState.getFavorites).subscribe({
      next: (favorites) => (this.favoriteRecipes = favorites),
    });
  }
}
