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
