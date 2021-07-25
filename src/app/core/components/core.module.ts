import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [EditEntityComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    FlexModule,
    MatInputModule,
    MatTooltipModule,
  ],
  exports: [EditEntityComponent],
})
export class CoreModule {}
