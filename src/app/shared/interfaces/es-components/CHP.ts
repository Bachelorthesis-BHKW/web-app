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
