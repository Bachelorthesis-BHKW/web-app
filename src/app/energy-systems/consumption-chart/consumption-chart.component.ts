import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import ESConsumption from '../../shared/interfaces/ESConsumption';
import { EsConsumptionService } from '../../core/services/es-consumption.service';

@Component({
  selector: 'app-consumption-chart',
  templateUrl: './consumption-chart.component.html',
  styleUrls: ['./consumption-chart.component.css'],
})
export class ConsumptionChartComponent implements OnInit {
  private consumptions: ESConsumption[] = [];
  public chartData: {
    name: string;
    series: { name: string; value: number }[];
  }[] = [];
  private energyData: {
    name: string;
    series: { name: string; value: number }[];
  } = { name: 'Energy Consumption', series: [] };

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  view: [number, number] = [1200, 500];

  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Consumption';

  constructor(
    private dialogRef: MatDialogRef<ConsumptionChartComponent>,
    @Inject(MAT_DIALOG_DATA) private energySystem: EnergySystem,
    private esConsumptionService: EsConsumptionService
  ) {
    this.chartData.push(this.energyData);
  }

  ngOnInit(): void {
    this.esConsumptionService
      .getEnergySystemConsumptions(this.energySystem)
      .subscribe((consumptions) => {
        this.consumptions = consumptions;
        this.initData(this.consumptions);
      });
  }

  private initData(consumptions: ESConsumption[]) {
    for (const consumption of consumptions) {
      this.energyData.series.push({
        name: consumption.date,
        value: consumption.verbrauchStrom,
      });
    }
    this.chartData = [...this.chartData];
  }
}
