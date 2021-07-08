import { Component, Input, OnInit } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';

@Component({
  selector: 'app-energy-system-detail',
  templateUrl: './energy-system-detail.component.html',
  styleUrls: ['./energy-system-detail.component.css'],
})
export class EnergySystemDetailComponent implements OnInit {
  @Input() energySystem?: EnergySystem;

  constructor() {}

  ngOnInit(): void {}
}
