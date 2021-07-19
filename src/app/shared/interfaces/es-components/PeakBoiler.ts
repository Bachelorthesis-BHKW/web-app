import { Parameters } from './ESComponent';

export default interface PeakBoiler extends Parameters {
  qDot_Kessel_max_kW: number;
}

export const emptyPeakBoiler: PeakBoiler = {
  qDot_Kessel_max_kW: 0,
};
