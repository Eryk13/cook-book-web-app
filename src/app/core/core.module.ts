import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
