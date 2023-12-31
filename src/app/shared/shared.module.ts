import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { DialogComponent } from '../modules/recipe/components/dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
