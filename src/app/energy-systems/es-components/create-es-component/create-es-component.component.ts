import { Component, Inject } from '@angular/core';
import { EnergySystem } from '../../../shared/interfaces/EnergySystem';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../core/services/snackbar.service';
import ESComponent, {
  emptyESComponent,
  esComponentAttributeDescriptions,
  Parameters,
} from '../../../shared/interfaces/es-components/ESComponent';
import { EsComponentService } from '../../../core/services/es-component.service';
import { ESComponentType } from '../../../shared/interfaces/es-components/ESComponentType';
import {
  chpAttributeDescriptions,
  emptyCHP,
} from '../../../shared/interfaces/es-components/CHP';
import ComponentHelper from '../../../shared/helpers/ComponentHelper';

@Component({
  selector: 'app-create-es-component',
  templateUrl: './create-es-component.component.html',
  styleUrls: ['./create-es-component.component.css'],
})
export class CreateEsComponentComponent {
  esComponent = emptyESComponent;
  esComponentParams: Parameters = emptyCHP;
  selectedType: ESComponentType = ESComponentType.CHP;
  componentTypes: string[] = Object.values(ESComponentType);
  esComponentAttributeDescriptions = esComponentAttributeDescriptions;
  esComponentKenngroessenDescriptions = chpAttributeDescriptions;

  constructor(
    private esComponentService: EsComponentService,
    private dialogRef: MatDialogRef<CreateEsComponentComponent>,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) private energySystem: EnergySystem
  ) {
    this.esComponent.kenngroessen = this.esComponentParams;
    this.esComponent.energySystemId = energySystem.energySystemId;
  }

  onComponentTypeSelected(componentType: ESComponentType) {
    this.esComponent.type = componentType;
    this.esComponentParams =
      ComponentHelper.getEmptyForComponentAttributesType(componentType);
    this.esComponent.kenngroessen = this.esComponentParams;
    this.esComponentKenngroessenDescriptions =
      ComponentHelper.getKenngrossenDescripitonForComponentType(componentType);
  }

  onAddComponent(esComponent: ESComponent): void {
    this.esComponentService
      .postESComponent(this.energySystem, esComponent)
      .subscribe(
        (component) => {
          this.dialogRef.close(component);
        },
        (error) => {
          this.snackbarService.open('Error creating component!');
          console.warn(error);
        }
      );
  }
}
