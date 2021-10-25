import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './dialog/dialog.component';

//For exporting components to all pages
@NgModule({
  imports: [CommonModule, FormsModule, MatCardModule, ReactiveFormsModule],
  declarations: [CardComponent, DialogComponent],
  exports: [CardComponent],
})
export class ComponentsModule {}
