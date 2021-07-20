import { Injectable } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import { Observable } from 'rxjs';
import ESConsumption from '../../shared/interfaces/ESConsumption';
import { EsClientService } from './es-client.service';
import { EnergySystemService } from './energy-system.service';

@Injectable({
  providedIn: 'root',
})
export class EsConsumptionService {
  private static esConsumptionsUri = `${EnergySystemService.energySystemUri}/${EnergySystemService.id}/consumptions`;

  constructor(private esClient: EsClientService) {}

  private static esConsumptionUriWithId(id: number): string {
    return this.esConsumptionsUri.replace(EnergySystemService.id, String(id));
  }

  getEnergySystemConsumptions(
    energySystem: EnergySystem
  ): Observable<ESConsumption[]> {
    return this.esClient.get<ESConsumption[]>(
      EsConsumptionService.esConsumptionUriWithId(energySystem.energySystemId)
    );
  }
}
