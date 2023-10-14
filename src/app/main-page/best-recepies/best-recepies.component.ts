import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { Posts } from 'src/app/interfaces/posts-interface';

@Component({
  selector: 'app-best-recepies',
  templateUrl: './best-recepies.component.html',
  styleUrls: ['./best-recepies.component.css'],
})
export class BestRecepiesComponent {
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  bestRecipes!: Posts[];
  bestRecipesSliced!: Posts[];

  showNotification() {}

  ngOnInit() {
    this.dataService.getAllPosts().subscribe({
      next: (value) => {
        this.bestRecipes = value;
        const shuffled = Array.from(this.bestRecipes).sort(
          () => 0.5 - Math.random()
        );
        this.bestRecipes = shuffled.slice(0, 6);
        this.bestRecipesSliced = this.bestRecipes.slice(0, 3);
      },
    });
  }
}
