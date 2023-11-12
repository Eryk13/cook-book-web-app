import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/modules/recipe/models/ingredient';
import { Recipe } from 'src/app/modules/recipe/models/recipe';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-recipe-list',
  templateUrl: './user-recipe-list.component.html',
  styleUrls: ['./user-recipe-list.component.css'],
})
export class UserRecipeListComponent {
  recipes: Recipe[] = [];
  displayedColumns: string[] = ['title', 'ingredients', 'actions'];
  length: number | undefined;

  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadData(0, 10);
  }

  loadData(page: number, size: number) {
    this.recipeService.getRecipes(page, size).subscribe({
      next: (res) => {
        this.recipes = res.content;
        this.length = res.totalElements;
      },
    });
  }

  getIngrediens(ingredients: Ingredient[]) {
    return ingredients.map((i) => i.name).join(', ');
  }

  deleteRecipe(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.recipeService.deleteRecipe(id).subscribe();
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.loadData(e.pageIndex, e.pageSize);
  }
}
