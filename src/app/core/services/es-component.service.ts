import { Injectable } from '@angular/core';
import { EsClientService } from './es-client.service';
import { Observable } from 'rxjs';
import { EnergySystem } from '../../shared/interfaces/EnergySystem';
import ESComponent from '../../shared/interfaces/es-components/ESComponent';

@Injectable({
  providedIn: 'root',
})
export class EsComponentService {
  private static energySystemId = '$ESID';
  private static componentId = '$CID';

  private static esComponentsUri = `/energy-systems/${EsComponentService.energySystemId}/components`;
  private static esComponentIdUri = `/energy-systems/${EsComponentService.energySystemId}/components/${EsComponentService.componentId}`;

  constructor(private esClient: EsClientService) {}

  private static esComponentsUriWithId(
    energySystem: EnergySystem,
    componentId?: number
  ): string {
    return componentId
      ? this.esComponentIdUri
          .replace(this.energySystemId, String(energySystem.energySystemId))
          .replace(this.componentId, String(componentId))
      : this.esComponentsUri.replace(
          this.energySystemId,
          String(energySystem.energySystemId)
        );
  }

  getESComponents(energySystem: EnergySystem): Observable<ESComponent[]> {
    return this.esClient.get<ESComponent[]>(
      EsComponentService.esComponentsUriWithId(energySystem)
    );
  }

  getESComponent(
    energySystem: EnergySystem,
    componentId: number
  ): Observable<ESComponent> {
    return this.esClient.get<ESComponent>(
      EsComponentService.esComponentsUriWithId(energySystem, componentId)
    );
  }

  postESComponent(
    energySystem: EnergySystem,
    component: ESComponent
  ): Observable<ESComponent> {
    return this.esClient.post<ESComponent>(
      EsComponentService.esComponentsUriWithId(energySystem),
      component
    );
  }

  deleteESComponent(
    energySystem: EnergySystem,
    component: ESComponent
  ): Observable<void> {
    return this.esClient.delete(
      EsComponentService.esComponentsUriWithId(
        energySystem,
        component.esComponentId
      )
    );
  }

  patchESComponent(
    energySystem: EnergySystem,
    componentId: number,
    patch: Partial<ESComponent>
  ): Observable<void> {
    return this.esClient.patch(
      EsComponentService.esComponentsUriWithId(energySystem, componentId),
      patch
    );
  }
}
