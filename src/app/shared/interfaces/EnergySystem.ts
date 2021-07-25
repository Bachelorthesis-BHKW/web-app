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
  prognosemethodeEl: number;
  qThZaehlerGesamt: boolean;
  qThZaehlerGetrennt: boolean;
  gewichtungsfaktorZufall: number;
  uaGeb: number;

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
  name: 'New EnergySystem',
  nFahrplan: 5000,
  untermengeNFahrplan: 50,
  optimierungshorizontMin: 2000,
  optimierungsgroesse: 0,
  deltaT: 10,
  stetigkeitsfaktor: 5,
  prognosemethodeTh: 0,
  prognosemethodeEl: 0,
  qThZaehlerGesamt: false,
  qThZaehlerGetrennt: false,
  gewichtungsfaktorZufall: 0.25,
  uaGeb: 1,

  algorithmTrigger: AlgorithmTrigger.post,
  cronTriggerTime: '',
  maxHistoryDays: 20,
  consumptionPostIntervalMin: 15,
  latitude: 48.495949,
  longitude: 9.21191,
  region: '',
};
