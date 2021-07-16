import { Component, OnInit } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import { EnergySystemService } from '../../core/services/energy-system.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEnergySystemComponent } from '../create-energy-system/create-energy-system.component';
import { SnackbarService } from '../../core/services/snackbar.service';

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
    private snackbarService: SnackbarService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEnergySystems();
  }

  onSelect(energySystem: EnergySystem): void {
    this.selectedEnergySystem = energySystem;
  }

  onDelete(energySystem: EnergySystem): void {
    this.energySystemService.deleteEnergySystem(energySystem).subscribe(
      () => {
        this.snackbarService.open('Success!');
        this.getEnergySystems();
      },
      (error) => {
        this.snackbarService.open('Error!');
        console.warn(error);
      }
    );
  }

  getEnergySystems(): void {
    this.energySystemService
      .getEnergySystems()
      .subscribe((energySystems) => (this.energySystems = energySystems));
  }

  onNewEnergySystem(): void {
    this.dialog
      .open(CreateEnergySystemComponent, {
        maxHeight: '80vh',
      })
      .afterClosed()
      .subscribe(() => this.getEnergySystems());
  }
}
