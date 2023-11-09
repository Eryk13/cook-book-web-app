import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/components/login-page/login-page.component';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { RecipePageComponent } from './modules/recipe/components/recipe-page/recipe-page.component';
import { RegisterPageComponent } from './modules/auth/components/register-page/register-page.component';
import { RecipeDetailPageComponent } from './modules/recipe/components/recipe-detail-page/recipe-detail-page.component';
import { CreateRecipePageComponent } from './modules/recipe/components/create-recipe-page/create-recipe-page.component';
import { userGuard } from './modules/auth/guards/user.guard';
import { EditRecipeComponent } from './modules/recipe/components/edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recipes', component: RecipePageComponent, canActivate: [userGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  {
    path: 'recipe/:id',
    component: RecipeDetailPageComponent,
    canActivate: [userGuard],
  },
  {
    path: 'create-recipe',
    component: CreateRecipePageComponent,
    canActivate: [userGuard],
  },
  {
    path: 'edit-recipe/:id',
    component: EditRecipeComponent,
    canActivate: [userGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
