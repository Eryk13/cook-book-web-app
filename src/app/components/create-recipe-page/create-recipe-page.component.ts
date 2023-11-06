import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
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
  instructions: string[] = [];
  ingredients: Ingredient[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {}

  onSubmit() {
    const title = this.firstFormGroup.get('title')?.value?.trim();
    if (title) {
      const recipe = <Recipe>{
        title: title,
        instructions: this.instructions.join('|'),
        ingredients: this.ingredients,
      };
      this.recipeService.addRecipe(recipe).subscribe({
        next: (res) => {
          this.router.navigate(['/recipe/', res.id]);
        },
      });
    }
  }

  addInstruction() {
    const instruction = this.secondFormGroup.get('instruction')?.value?.trim();
    if (instruction) {
      this.instructions.push(instruction);
      this.secondFormGroup.get('instruction')?.setValue('');
    }
  }

  addIngredient() {
    const ingredient = this.thirdFormGroup.get('ingredient')?.value?.trim();
    if (ingredient) {
      this.ingredients.push(<Ingredient>{ name: ingredient });
      this.thirdFormGroup.get('ingredient')?.setValue('');
    }
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
  deleteInstruction(index: number) {
    this.instructions.splice(index, 1);
  }
}
