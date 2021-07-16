import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import { EsComponentService } from '../../core/services/es-component.service';
import ESComponent from '../../shared/interfaces/ESComponent';

@Component({
  selector: 'app-es-components',
  templateUrl: './es-components.component.html',
  styleUrls: ['./es-components.component.css'],
})
export class EsComponentsComponent implements OnChanges {
  @Input() energySystem?: EnergySystem;
  components: ESComponent[] = [];
  selectedComponent?: ESComponent;

  constructor(private esComponentService: EsComponentService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.energySystem) this.getComponentsForEnergySystem(this.energySystem);
  }

  onSelect(component: ESComponent): void {
    this.selectedComponent = component;
  }

  onDelete(component: ESComponent, energySystem: EnergySystem): void {
    this.esComponentService
      .deleteESComponent(energySystem, component)
      .subscribe(() => {
        this.getComponentsForEnergySystem(energySystem);
      });
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
