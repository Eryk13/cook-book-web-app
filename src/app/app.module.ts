import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserRecipeListComponent } from './components/user-recipe-list/user-recipe-list.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { AuthInterceptor } from './auth.interceptor';
import { CreateRecipePageComponent } from './components/create-recipe-page/create-recipe-page.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LoginPageComponent,
    HomePageComponent,
    RecipePageComponent,
    RegisterPageComponent,
    UserRecipeListComponent,
    RecipeDetailPageComponent,
    CreateRecipePageComponent,
    EditRecipeComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatDividerModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
