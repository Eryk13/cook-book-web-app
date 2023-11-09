import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRecipePageComponent } from './components/create-recipe-page/create-recipe-page.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { UserRecipeListComponent } from './components/user-recipe-list/user-recipe-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CreateRecipePageComponent,
    EditRecipeComponent,
    RecipeDetailPageComponent,
    RecipeFormComponent,
    RecipePageComponent,
    UserRecipeListComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class RecipeModule {}
