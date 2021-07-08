export enum AlgorithmTrigger {
  time = 'time',
  post = 'post',
}

export interface EnergySystem {
  energySystemId?: number;
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
