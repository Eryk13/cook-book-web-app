import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
