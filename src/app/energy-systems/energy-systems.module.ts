import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergySystemDetailComponent } from './energy-system-detail/energy-system-detail.component';
import { EnergySystemsComponent } from './energy-systems.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EnergySystemsComponent, EnergySystemDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
})
export class EnergySystemsModule {}
