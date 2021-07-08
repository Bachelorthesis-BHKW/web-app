import { Component, OnInit } from '@angular/core';
import { EnergySystem } from '../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../core/services/energy-system.service';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-energy-systems',
  templateUrl: './energy-systems.component.html',
  styleUrls: ['./energy-systems.component.css'],
})
export class EnergySystemsComponent implements OnInit {
  energySystems: EnergySystem[] = [];
  selectedEnergySystem?: EnergySystem;

  constructor(
    private energySystemService: EnergySystemService,
    private messageService: MessageService
  ) {}

  onSelect(es: EnergySystem): void {
    this.messageService.add(`Selected id ${es.energySystemId}`);
    this.selectedEnergySystem = es;
  }
  ngOnInit(): void {
    this.getEnergySystems();
  }

  getEnergySystems(): void {
    this.energySystemService
      .getEnergySystems()
      .subscribe((energySystems) => (this.energySystems = energySystems));
  }
}
