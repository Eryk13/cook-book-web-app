import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
  $recipes : Observable<Recipe[]> | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.$recipes = this.recipeService.getRecipes();
  }
}
