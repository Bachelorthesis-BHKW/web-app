import { Parameters } from './ESComponent';

export default interface SLK extends Parameters {
  qDot_max_kW: number;
  eingriffsgrenze: number;
  modulation_min: number;
  mindestlaufzeit_min: number;
}

export const emptySLK: SLK = {
  qDot_max_kW: 0,
  eingriffsgrenze: 0,
  modulation_min: 0,
  mindestlaufzeit_min: 0,
};

export const slkAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['qDot_max_kW', 'Thermische Maximalleistung Zusatzkessel / kW'],
  [
    'eingriffsgrenze',
    'Speicherfüllstand, bei dem Zusatzkessel anspringen soll (Wert zwischen 0 und 1)',
  ],
  [
    'modulation_min',
    'Minimaler Modulationsgrad Zusatzkessel (Wert zwischen 0 und 1)',
  ],
  ['mindestlaufzeit_min', 'Mindestlaufzeit Zusatzkessel / min'],
]);
