import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe-interface';
import { Posts } from '../../interfaces/posts-interface';
import { Meta } from '@angular/platform-browser';
import {
  RecipeIngUpdate,
  RecipeStepsUpdate,
} from 'src/store/model/recipe.model';
import { Store } from '@ngxs/store';
import { IngredientsState } from 'src/store/recipe.state';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  constructor(
    private dataService: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private store: Store
  ) {}

  recipeId: number = 1;
  recipeInfo!: Recipe;
  randomRecipes!: Posts[];

  recipeIngredients: string[] = [];
  recipeSteps: string[] = [];

  ngOnInit() {
    this.activatedRouter.params.subscribe({
      next: (params) => (this.recipeId = params['id']),
    });

    this.dataService.getRecipe(this.recipeId).subscribe({
      next: (recipe) => {
        this.recipeInfo = recipe;

        this.meta.updateTag({
          name: 'og:description',
          content: this.recipeInfo.body,
        });
        this.meta.updateTag({
          name: 'og:title',
          content: this.recipeInfo.title,
        });
        this.meta.updateTag({
          name: 'og:image',
          content: this.recipeInfo.image,
        });
      },
    });

    this.dataService.getAllPosts().subscribe({
      next: (value) => {
        this.randomRecipes = value;

        const shuffled = Array.from(this.randomRecipes).sort(
          () => 0.5 - Math.random()
        );

        this.randomRecipes = shuffled.slice(0, 3);
      },
    });

    this.store.select(IngredientsState.getIngredients).subscribe({
      next: (ingredient) => (this.recipeIngredients = ingredient),
    });
  }

  recipeIngUpdate(recipeIng: string) {
    this.store.dispatch(new RecipeIngUpdate(recipeIng));
  }

  recipeStepUpdate(recipeIng: string) {
    this.store.dispatch(new RecipeStepsUpdate(recipeIng));
  }

  printThisPage() {
    window.print();
  }
}
