import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/modules/recipe/models/recipe';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css'],
})
export class RecipeDetailPageComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(parseInt(id)).subscribe({
        next: (res) => {
          this.recipe = res;
        },
      });
    }
  }
}
