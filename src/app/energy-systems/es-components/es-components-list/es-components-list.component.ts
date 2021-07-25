import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EnergySystem } from '../../../shared/interfaces/EnergySystem';
import { EsComponentService } from '../../../core/services/es-component.service';
import ESComponent from '../../../shared/interfaces/es-components/ESComponent';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEsComponentComponent } from '../create-es-component/create-es-component.component';
import ComponentHelper from '../../../shared/helpers/ComponentHelper';

@Component({
  selector: 'app-es-components-list',
  templateUrl: './es-components-list.component.html',
  styleUrls: ['./es-components-list.component.css'],
})
export class EsComponentsListComponent implements OnChanges {
  @Input() energySystem?: EnergySystem;
  components: ESComponent[] = [];
  selectedComponent?: ESComponent;
  componentKenngroessenDescription = new Map<string, string>();

  constructor(
    private esComponentService: EsComponentService,
    private snackBarService: SnackbarService,
    public dialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.energySystem) this.getComponentsForEnergySystem(this.energySystem);
  }

  onSelect(component: ESComponent): void {
    if (
      this.selectedComponent &&
      this.selectedComponent.esComponentId === component.esComponentId
    )
      this.selectedComponent = undefined;
    else this.selectedComponent = component;
    this.componentKenngroessenDescription =
      ComponentHelper.getKenngrossenDescripitonForComponentType(component.type);
  }

  onDelete(component: ESComponent, energySystem: EnergySystem): void {
    this.esComponentService
      .deleteESComponent(energySystem, component)
      .subscribe(
        () => {
          this.snackBarService.open('Success!');
          this.getComponentsForEnergySystem(energySystem);
          this.selectedComponent = undefined;
        },
        (error) => {
          this.snackBarService.open('An error occurred!');
          console.warn(error);
        }
      );
  }

  onAdd(energySystem: EnergySystem): void {
    this.dialog
      .open(CreateEsComponentComponent, {
        data: energySystem,
        maxHeight: '80vh',
      })
      .afterClosed()
      .subscribe(() => this.getComponentsForEnergySystem(energySystem));
  }

  getComponentsForEnergySystem(energySystem: EnergySystem): void {
    this.esComponentService.getESComponents(energySystem).subscribe(
      (components) => {
        this.components = components;
      },
      (error) => console.warn(error)
    );
  }
}
