import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { CreateRecipe as editRecipe } from 'src/app/interfaces/create-recipe-interface';
import { AuthState } from 'src/store/auth.state';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent {
  constructor(
    private dataService: DataService,
    private store: Store,
    private toastr: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  recipeId!: number;

  editRecipe: editRecipe = {
    title: null,
    body: null,
    tags: null,
    image: null,
    favorite: false,
    timeCooking: null,
    foodValue: {
      calories: null,
      fats: null,
      carbohydrates: null,
      belki: null,
    },
    additionalInformation: {
      ingredients: [''],
      details: [
        {
          title: '',
          body: '',
        },
      ],
    },
  };

  sendEditedRecipe() {
    this.dataService
      .patchPost(
        this.store.selectSnapshot(AuthState.getToken)!,
        this.recipeId,
        this.editRecipe
      )
      .subscribe({
        next: (value) => {
          this.toastr.success(
            'Успешно!',
            'Содержание рецепта было успешно изменено!'
          );
          this.router.navigate(['/admin/recipes']);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error('Рецепт не был отправлен!', 'Ошибка ' + err.status);
        },
      });
  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.recipeId = Number(params.get('id')!);
      },
    });
    this.dataService.getRecipe(this.recipeId).subscribe({
      next: (recipe) => {
        this.editRecipe = recipe;
      },
    });
  }
}
