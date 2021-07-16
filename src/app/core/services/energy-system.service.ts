import { Injectable } from '@angular/core';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import { Observable } from 'rxjs';
import { EsClientService } from './es-client.service';

@Injectable({
  providedIn: 'root',
})
export class EnergySystemService {
  private static id = '$ID';

  private static energySystemUri = '/energy-systems';
  private static energySystemIdUri = `${EnergySystemService.energySystemUri}/${EnergySystemService.id}`;

  constructor(private esClient: EsClientService) {}

  private static energySystemUriWithId(id: number): string {
    return this.energySystemIdUri.replace(EnergySystemService.id, String(id));
  }

  getEnergySystems(): Observable<EnergySystem[]> {
    return this.esClient.get<EnergySystem[]>(
      EnergySystemService.energySystemUri
    );
  }

  getEnergySystem(energySystemId: number): Observable<EnergySystem> {
    return this.esClient.get<EnergySystem>(
      EnergySystemService.energySystemUriWithId(energySystemId)
    );
  }

  postEnergySystem(energySystem: EnergySystem): Observable<EnergySystem> {
    return this.esClient.post<EnergySystem>(
      EnergySystemService.energySystemUri,
      energySystem
    );
  }

  deleteEnergySystem(energySystem: EnergySystem): Observable<void> {
    return this.esClient.delete(
      EnergySystemService.energySystemUriWithId(energySystem.energySystemId)
    );
  }

  patchEnergySystem(
    energySystemId: number,
    patch: Partial<EnergySystem>
  ): Observable<void> {
    return this.esClient.patch(
      EnergySystemService.energySystemUriWithId(energySystemId),
      patch
    );
  }
}
