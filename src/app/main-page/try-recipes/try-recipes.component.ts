import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';

@Component({
  selector: 'app-try-recipes',
  templateUrl: './try-recipes.component.html',
  styleUrls: ['./try-recipes.component.css'],
})
export class TryRecipesComponent {
  constructor(private dataService: DataService) {}

  randomRecipes!: Posts[];

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
  }
}
