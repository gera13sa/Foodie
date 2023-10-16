import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';
import { FavoritesState } from 'src/store/favorites.state';
import { FavoriteUpdate } from 'src/store/model/favorites.model';

@Component({
  selector: 'app-try-recipes',
  templateUrl: './try-recipes.component.html',
  styleUrls: ['./try-recipes.component.css'],
})
export class TryRecipesComponent {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService,
    private store: Store
  ) {}

  randomRecipes!: Posts[];
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
      next: (value) => {
        this.randomRecipes = value;

        const shuffled = Array.from(this.randomRecipes).sort(
          () => 0.5 - Math.random()
        );

        this.randomRecipes = shuffled.slice(0, 4);
      },
    });

    this.store.select(FavoritesState.getFavorites).subscribe({
      next: (favorites) => (this.favoriteRecipes = favorites),
    });
  }
}
