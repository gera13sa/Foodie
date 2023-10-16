import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe-interface';
import { Posts } from '../interfaces/posts-interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  constructor(
    private dataService: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  recipeId!: number;
  recipeInfo!: Recipe;
  randomRecipes!: Posts[];

  ngOnInit() {
    this.activatedRouter.params.subscribe({
      next: (params) => (this.recipeId = params['id']),
    });

    this.dataService.getRecipe(this.recipeId).subscribe({
      next: (recipe) => {
        this.recipeInfo = recipe;
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
  }

  printThisPage() {
    window.print();
  }
}
