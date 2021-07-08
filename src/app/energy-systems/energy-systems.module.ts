import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergySystemDetailComponent } from './energy-system-detail/energy-system-detail.component';
import { EnergySystemsComponent } from './energy-systems.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnergySystemsComponent, EnergySystemDetailComponent],
  imports: [CommonModule, FormsModule],
})
export class EnergySystemsModule {}
