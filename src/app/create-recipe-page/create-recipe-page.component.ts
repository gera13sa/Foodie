import { Component } from '@angular/core';
import { CreateRecipe } from '../interfaces/create-recipe-interface';
import { DataService } from '../data.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/store/auth.state';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css'],
})
export class CreateRecipePageComponent {
  constructor(
    private dataService: DataService,
    private store: Store,
    private toastr: ToastrService,
    private router: Router
  ) {}

  fileTarget: any;
  fileName: string = '';
  fileIsSelected: boolean = false;
  fileSizeLimit: number = 10485760;
  fileLimitExceeded: boolean = false;

  createRecipe: CreateRecipe = {
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

  selectFile(event: any) {
    const selectedFile = event.target.files[0];
    this.fileName = selectedFile.name;

    this.fileTarget = event.target;
    if (selectedFile) {
      this.fileIsSelected = true;
      const fileSize = selectedFile.size;

      if (fileSize > this.fileSizeLimit) {
        this.fileLimitExceeded = true;
        event.target.value = '';
        this.fileIsSelected = false;
      }

      this.createRecipe.image = this.fileName;
    }
  }

  deleteFile() {
    this.fileTarget.value = '';
    this.fileIsSelected = false;
    this.fileLimitExceeded = false;
  }

  createNewRecipe() {
    console.log(this.createRecipe);
    this.dataService
      .sendPost(
        this.store.selectSnapshot(AuthState.getToken)!,
        this.createRecipe
      )
      .subscribe({
        next: (value) => {
          this.toastr.success('Рецепт был успешно отправлен!');
          this.router.navigate(['/']);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error('Рецепт не отправлен!', 'Ошибка ' + err.status);
        },
      });
  }

  ngOnInit() {}
}
