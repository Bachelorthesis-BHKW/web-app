import { Component } from '@angular/core';
import {
  emptyEnergySystem,
  EnergySystem,
  energySystemAttributeDescriptions,
} from '../../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../../core/services/energy-system.service';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-create-energy-system',
  templateUrl: './create-energy-system.component.html',
  styleUrls: ['./create-energy-system.component.css'],
})
export class CreateEnergySystemComponent {
  energySystem = emptyEnergySystem;
  energySystemAttributesDescription = energySystemAttributeDescriptions;

  constructor(
    private energySystemService: EnergySystemService,
    private dialogRef: MatDialogRef<CreateEnergySystemComponent>,
    private snackbarService: SnackbarService
  ) {}

  onCreate(energySystem: EnergySystem): void {
    this.energySystemService.postEnergySystem(energySystem).subscribe(
      (energySystem) => {
        this.dialogRef.close(energySystem);
      },
      (error) => {
        this.snackbarService.open('Error creating system!');
        console.warn(error);
      }
    );
  }
}
