import { Component, OnInit } from '@angular/core';
import { EnergySystem } from '../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../core/services/energy-system.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateEnergySystemComponent } from './create-energy-system/create-energy-system.component';

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
    private router: Router,
    public dialog: MatDialog
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
    this.dialog.open(CreateEnergySystemComponent, {
      maxHeight: '80vh',
    });
  }
}
