import { Parameters } from './ESComponent';

export default interface PV extends Parameters {
  kollpower_W: number;
  kollsteigung: number;
  kolllazi: number;
  deltaWp: number;
  etakoll: number;
  albedo: number;
}

export const emptyPv: PV = {
  kollpower_W: 0,
  kollsteigung: 0,
  kolllazi: 0,
  deltaWp: 0.0047,
  etakoll: 0,
  albedo: 0.2,
};

export const pvAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['kollpower_W', 'Peakleistung / kW'],
  ['kollsteigung', 'Kollektorsteigung (0° = horizontal, 90 = senkrecht) / °'],
  ['kolllazi', 'Kollektorazimut (0° = süd, -90° = ost) / °'],
  [
    'deltaWp',
    'Korrekturfaktor der Peakleistung in Abhängigkeit der Temperatur (Standard: 0,0047)',
  ],
  [
    'etakoll',
    'Wirkungsgradverluste am Kollektor durch Verschmutzung, Diodenverlust, etc. (Wert zwischen 0 und 1)',
  ],
  ['albedo', 'Reflektionsgrad vom Boden an die Umgebung (Standard: 0,2)'],
]);
