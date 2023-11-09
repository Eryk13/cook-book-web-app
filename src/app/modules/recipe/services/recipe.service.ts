import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly url = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>(this.url);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.url, recipe);
  }

  getRecipeById(id: number) {
    return this.http.get<Recipe>(this.url + '/' + id);
  }

  deleteRecipe(id: number) {
    return this.http.delete<any>(this.url + '/' + id);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put<any>(this.url, recipe);
  }
}
