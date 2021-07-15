export enum AlgorithmTrigger {
  time = 'time',
  post = 'post',
}

export interface EnergySystem {
  energySystemId: number;
  userId: number;
  name: string;
  nFahrplan: number;
  untermengeNFahrplan: number;
  optimierungshorizontMin: number;
  optimierungsgroesse: number;
  deltaT: number;
  stetigkeitsfaktor: number;
  prognosemethodeTh: number;
  qThZaehlerGesamt: boolean;
  qThZaehlerGetrennt: boolean;
  gewichtungsfaktorZufall: number;

  algorithmTrigger: AlgorithmTrigger;
  cronTriggerTime: string;
  maxHistoryDays: number;
  consumptionPostIntervalMin: number;
  latitude: number;
  longitude: number;
  region: string;
}

export const emptyEnergySystem: EnergySystem = {
  energySystemId: 0,
  userId: 0,
  name: '',
  nFahrplan: 0,
  untermengeNFahrplan: 0,
  optimierungshorizontMin: 0,
  optimierungsgroesse: 0,
  deltaT: 0,
  stetigkeitsfaktor: 0,
  prognosemethodeTh: 0,
  qThZaehlerGesamt: false,
  qThZaehlerGetrennt: false,
  gewichtungsfaktorZufall: 0,

  algorithmTrigger: AlgorithmTrigger.time,
  cronTriggerTime: '',
  maxHistoryDays: 0,
  consumptionPostIntervalMin: 0,
  latitude: 0,
  longitude: 0,
  region: '',
};
