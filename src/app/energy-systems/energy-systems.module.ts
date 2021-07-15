import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergySystemDetailComponent } from './energy-system-detail/energy-system-detail.component';
import { EnergySystemsComponent } from './energy-systems.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexModule } from '@angular/flex-layout';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateEnergySystemComponent } from './create-energy-system/create-energy-system.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppModule } from '../app.module';
import { CoreModule } from '../core/components/core.module';

@NgModule({
  declarations: [
    EnergySystemsComponent,
    EnergySystemDetailComponent,
    CreateEnergySystemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CoreModule,
  ],
})
export class EnergySystemsModule {}
