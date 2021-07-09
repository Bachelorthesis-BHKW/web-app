import { Injectable } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import { Observable } from 'rxjs';
import { EsClientService } from './es-client.service';

@Injectable({
  providedIn: 'root',
})
export class EnergySystemService {
  private static energySystemUri = '/energy-systems';

  constructor(private esClient: EsClientService) {}

  getEnergySystems(): Observable<EnergySystem[]> {
    return this.esClient.get<EnergySystem[]>(
      EnergySystemService.energySystemUri
    );
  }
}
