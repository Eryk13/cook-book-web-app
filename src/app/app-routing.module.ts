import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { CreateRecipePageComponent } from './components/create-recipe-page/create-recipe-page.component';
import { userGuard } from './user.guard';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';

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
