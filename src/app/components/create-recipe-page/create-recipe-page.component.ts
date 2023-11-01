import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css'],
})
export class CreateRecipePageComponent {
  firstFormGroup = new FormGroup({
    title: new FormControl(''),
  });
  secondFormGroup = new FormGroup({
    instruction: new FormControl(''),
  });
  thirdFormGroup = new FormGroup({
    ingredient: new FormControl(''),
  });
  constructor(private recipeService: RecipeService) {}

  onSubmit() {}
}
