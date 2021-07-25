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
