export default interface ESComponent {
  esComponentId: number;
  energySystemId: number;
  name: string;
  type: ESComponentType;
  kenngroessen: Component;

  currentsPostIntervalMin: number;
  maxHistoryDays: number;
  circularBufferMax: number;
  circularBufferPointer: number;
}

interface Component {}
enum ESComponentType {
  Generic = 'generic',
  CHP = 'chp',
  Battery = 'battery',
  PV = 'pv',
  TES = 'tes',
  SLK = 'slk',
  ST = 'st',
  GS = 'gs',
}

export const emptyESComponent: ESComponent = {
  esComponentId: 0,
  name: '',
  circularBufferPointer: 0,
  circularBufferMax: 0,
  kenngroessen: {},
  type: ESComponentType.Generic,
  currentsPostIntervalMin: 1,
  energySystemId: 0,
  maxHistoryDays: 3,
};
