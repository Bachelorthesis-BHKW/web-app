import { ESComponentType } from './ESComponentType';

export default interface ESComponent {
  esComponentId: number;
  energySystemId: number;
  name: string;
  type: ESComponentType;
  kenngroessen: Parameters;

  currentsPostIntervalMin: number;
  maxHistoryDays: number;
  circularBufferMax: number;
  circularBufferPointer: number;
}

export interface Parameters {}

export const emptyESComponent: ESComponent = {
  esComponentId: 0,
  name: 'New Component',
  circularBufferPointer: 0,
  circularBufferMax: 0,
  kenngroessen: {},
  type: ESComponentType.CHP,
  currentsPostIntervalMin: 15,
  energySystemId: 0,
  maxHistoryDays: 20,
};

export const esComponentAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['name', 'Name der Komponente'],
  [
    'type',
    'Typ der Energiekomponente: chp: Blockheizkraftwerk; tes: Wärmespeicher; slk: Zusatzkessel; battery: Batterie; PV: Photovoltaik; st: Solarthermie; gs: Gasspeicher',
  ],
  [
    'currentsPostIntervalMin',
    'Übermittlungsintervall der aktuellen Komponentendaten (Ganze Zahl in Minuten; Empfehlung: currentsPostIntervalMin = consumption_post_interval)',
  ],
  [
    'maxHistoryDays',
    'Anzahl gespeicherter Tage der aktuellen Komponentendaten (Ganze Zahl in Tagen zwischen min. 14 und 28 (Empfehlung))',
  ],
]);
