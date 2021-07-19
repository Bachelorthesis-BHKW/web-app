import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergySystemDetailComponent } from './energy-system-detail/energy-system-detail.component';
import { EnergySystemsComponent } from './energy-system-list/energy-systems.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateEnergySystemComponent } from './create-energy-system/create-energy-system.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreModule } from '../core/components/core.module';
import { EsComponentsListComponent } from './es-components/es-components-list/es-components-list.component';
import { EsComponentsDetailComponent } from './es-components/es-components-detail/es-components-detail.component';
import { CreateEsComponentComponent } from './es-components/create-es-component/create-es-component.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    EnergySystemsComponent,
    EnergySystemDetailComponent,
    CreateEnergySystemComponent,
    EsComponentsListComponent,
    EsComponentsDetailComponent,
    CreateEsComponentComponent,
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
    MatSelectModule,
  ],
})
export class EnergySystemsModule {}
