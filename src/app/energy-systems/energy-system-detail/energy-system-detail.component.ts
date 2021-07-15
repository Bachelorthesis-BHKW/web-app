import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  emptyEnergySystem,
  EnergySystem,
} from '../../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../../core/services/energy-system.service';
import { MessageService } from '../../core/services/message.service';
import { JsonPatchGenerator } from '../../shared/helpers/JsonPatchGenerator';

@Component({
  selector: 'app-energy-system-detail',
  templateUrl: './energy-system-detail.component.html',
  styleUrls: ['./energy-system-detail.component.css'],
})
export class EnergySystemDetailComponent implements OnChanges {
  @Input() energySystem?: EnergySystem;
  originalEnergySystem: EnergySystem = emptyEnergySystem;

  constructor(
    private energySystemService: EnergySystemService,
    private messageService: MessageService
  ) {}

  onSave(energySystem: EnergySystem): void {
    const patch = JsonPatchGenerator.generatePatch(
      this.originalEnergySystem,
      energySystem
    );
    this.energySystemService
      .patchEnergySystem(energySystem.energySystemId, patch)
      .subscribe(() => this.messageService.add('Success!'));
  }

  customTrackBy(index: number) {
    return index;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.energySystem && !this.originalEnergySystem.energySystemId)
      this.originalEnergySystem = { ...this.energySystem };
  }
}
