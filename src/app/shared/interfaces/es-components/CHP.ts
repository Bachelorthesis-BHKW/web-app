import { Parameters } from './ESComponent';

export interface CHP extends Parameters {
  p_el_max_kW: number;
  qDot_th_max_kW: number;
  mindestlaufzeit_min: number;
  mindestruhezeit_min: number;
  anlaufzeit_th90_min: number;
  verzugszeit_th_min: number;
  anlaufzeit_el90_min: number;
  verzugszeit_el_min: number;
  modulation: boolean;
  modulationsgrad_el: number[];
  modulationsgrad_th: number[];
}

export const emptyCHP: CHP = {
  p_el_max_kW: 0,
  qDot_th_max_kW: 0,
  mindestlaufzeit_min: 0,
  mindestruhezeit_min: 0,
  anlaufzeit_th90_min: 0,
  verzugszeit_th_min: 0,
  anlaufzeit_el90_min: 0,
  verzugszeit_el_min: 0,
  modulation: false,
  modulationsgrad_el: [],
  modulationsgrad_th: [],
};

export const chpAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['p_el_max_kW', 'Elektrische Maximalleistung BHKW / kW'],
  ['qDot_th_max_kW', 'Thermische Maximalleistung BHKW / kW'],
  ['mindestlaufzeit_min', 'Mindestlaufzeit BHKW / min'],
  ['mindestruhezeit_min', 'Mindestruhezeit BHKW / min'],
  [
    'anlaufzeit_th90_min',
    'Anlaufzeit BHKW bis 90 % der thermischen Maximalleistung erreicht sind; gezählt ab dem Zeitpunkt, an dem die erste Wärmeleistung abgegeben wird / min',
  ],
  [
    'verzugszeit_th_min',
    'Verzugszeit vom Einschalten bis zu dem Zeitpunkt, an dem die erste Wärmeleistung abgegeben wird  / min',
  ],
  [
    'anlaufzeit_el90_min',
    'Anlaufzeit BHKW bis 90 % der elektrischen Maximalleistung erreicht sind; gezählt ab dem Zeitpunkt, an dem die erste elektrische Leistung abgegeben wird / min',
  ],
  [
    'verzugszeit_el_min',
    'Verzugszeit vom Einschalten bis zu dem Zeitpunkt, an dem die erste elektrische Leistung abgegeben wird / min',
  ],
  [
    'modulation',
    'True: BHKW ist modulationsfähig; False: BHKW ist nicht modulationsfähig',
  ],
  [
    'modulationsgrad_el',
    'Array mit elektrischen Modulationsstufen (Werte zwischen 0 und 1)',
  ],
  [
    'modulationsgrad_th',
    'Array mit thermischen Modulationsstufen (Werte zwischen 0 und 1)',
  ],
]);
