import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/modules/recipe/models/ingredient';
import { Recipe } from 'src/app/modules/recipe/models/recipe';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnChanges {
  @Input() recipe: Recipe | undefined;

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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.recipe) {
      this.firstFormGroup.get('title')?.setValue(this.recipe.title);
      this.instructions = this.recipe.instructions.split('|');
      this.ingredients = this.recipe.ingredients;
    }
  }

  onSubmit() {
    const title = this.firstFormGroup.get('title')?.value?.trim();
    if (title) {
      console.log(this.recipe?.id);
      const recipe = <Recipe>{
        id: this.recipe?.id,
        title: title,
        instructions: this.instructions.join('|'),
        ingredients: this.ingredients,
      };
      if (recipe) {
        this.recipeService.updateRecipe(recipe).subscribe({
          next: (res) => {
            this.router.navigate(['/recipe/', this.recipe?.id]);
          },
        });
      } else {
        this.recipeService.addRecipe(recipe).subscribe({
          next: (res) => {
            this.router.navigate(['/recipe/', res.id]);
          },
        });
      }
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
