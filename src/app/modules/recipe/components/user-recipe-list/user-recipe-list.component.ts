import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class UserRecipeListComponent implements OnChanges, OnInit {
  recipes: Recipe[] = [];
  displayedColumns: string[] = ['title', 'ingredients', 'actions'];
  length: number | undefined;
  pageIndex: number = 0;
  pageSize: number = 10;
  @Input() search = '';

  constructor(
    private recipeService: RecipeService,
    private dialog: MatDialog,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('a');
    this.loadData(0, this.pageSize, this.search);
  }

  ngOnInit(): void {
    this.loadData(0, 10, this.search);
  }

  loadData(page: number, size: number, str: string) {
    this.recipeService.getRecipes(page, size, str).subscribe({
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
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(e.pageIndex, e.pageSize, this.search);
  }
}
