import { Component, Inject } from '@angular/core';
import { EnergySystem } from '../../../shared/interfaces/EnergySystem';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../core/services/snackbar.service';
import ESComponent, {
  emptyESComponent,
} from '../../../shared/interfaces/es-components/ESComponent';
import { EsComponentService } from '../../../core/services/es-component.service';

@Component({
  selector: 'app-create-es-component',
  templateUrl: './create-es-component.component.html',
  styleUrls: ['./create-es-component.component.css'],
})
export class CreateEsComponentComponent {
  esComponent = emptyESComponent;

  constructor(
    private esComponentService: EsComponentService,
    private dialogRef: MatDialogRef<CreateEsComponentComponent>,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) private energySystem: EnergySystem
  ) {}

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
