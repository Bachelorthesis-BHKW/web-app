import { Component, OnInit } from '@angular/core';
import { EnergySystem } from '../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../core/services/energy-system.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  onSelect(es: EnergySystem): void {
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

  onNewEnergySystem(): void {
    this.router.navigate(['/energy-systems/new']);
  }
}
