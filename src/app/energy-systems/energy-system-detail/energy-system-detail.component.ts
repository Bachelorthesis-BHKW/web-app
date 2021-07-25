import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  emptyEnergySystem,
  EnergySystem,
  energySystemAttributeDescriptions,
} from '../../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../../core/services/energy-system.service';
import { JsonPatchGenerator } from '../../shared/helpers/JsonPatchGenerator';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-energy-system-detail',
  templateUrl: './energy-system-detail.component.html',
  styleUrls: ['./energy-system-detail.component.css'],
})
export class EnergySystemDetailComponent implements OnChanges {
  @Input() energySystem?: EnergySystem;
  originalEnergySystem: EnergySystem = emptyEnergySystem;
  energySystemAttributesDescription = energySystemAttributeDescriptions;

  constructor(
    private energySystemService: EnergySystemService,
    private snackBarService: SnackbarService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.energySystem && !this.originalEnergySystem.energySystemId)
      this.originalEnergySystem = { ...this.energySystem };
  }

  onSave(energySystem: EnergySystem): void {
    const patch = JsonPatchGenerator.generatePatch(
      this.originalEnergySystem,
      energySystem
    );
    if (patch) {
      this.energySystemService
        .patchEnergySystem(energySystem.energySystemId, patch)
        .subscribe(
          () => this.snackBarService.open('Success!'),
          (error) => {
            this.snackBarService.open('An error occurred!');
            console.warn(error);
          }
        );
    } else {
      this.snackBarService.open('No changes to save!');
    }
  }
}
