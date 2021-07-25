import { ESComponentType } from '../interfaces/es-components/ESComponentType';
import {
  chpAttributeDescriptions,
  emptyCHP,
} from '../interfaces/es-components/CHP';
import {
  emptyThermalEnergyStorage,
  tesAttributeDescriptions,
} from '../interfaces/es-components/ThermalEnergyStorage';
import {
  emptySLK,
  slkAttributeDescriptions,
} from '../interfaces/es-components/SLK';
import {
  batteryAttributeDescriptions,
  emptyBattery,
} from '../interfaces/es-components/Battery';
import {
  emptyPv,
  pvAttributeDescriptions,
} from '../interfaces/es-components/PV';
import { Parameters } from '../interfaces/es-components/ESComponent';

export default class ComponentHelper {
  static getEmptyForComponentAttributesType(type: ESComponentType): Parameters {
    let params: Parameters = {};
    switch (type) {
      case ESComponentType.CHP:
        params = emptyCHP;
        break;
      case ESComponentType.TES:
        params = emptyThermalEnergyStorage;
        break;
      case ESComponentType.SLK:
        params = emptySLK;
        break;
      case ESComponentType.Battery:
        params = emptyBattery;
        break;
      case ESComponentType.PV:
        params = emptyPv;
        break;
    }
    return params;
  }
  static getKenngrossenDescripitonForComponentType(
    type: ESComponentType
  ): Map<string, string> {
    let description = new Map<string, string>();
    switch (type) {
      case ESComponentType.CHP:
        description = chpAttributeDescriptions;
        break;
      case ESComponentType.TES:
        description = tesAttributeDescriptions;
        break;
      case ESComponentType.SLK:
        description = slkAttributeDescriptions;
        break;
      case ESComponentType.Battery:
        description = batteryAttributeDescriptions;
        break;
      case ESComponentType.PV:
        description = pvAttributeDescriptions;
        break;
    }
    return description;
  }
}
