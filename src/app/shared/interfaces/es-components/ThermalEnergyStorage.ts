import { Parameters } from './ESComponent';

export default interface ThermalEnergyStorage extends Parameters {
  speichertemp_leer: number[];
  speichertemp_voll: number[];
  v_Speicher_m3: number;
  h_Speicher_m: number;
  rho: number;
  cp: number;
  uA_Speicher: number;
  h_Sensoren_m: number;
  t_Raum: number;
}

export const emptyThermalEnergyStorage: ThermalEnergyStorage = {
  speichertemp_leer: [],
  speichertemp_voll: [],
  v_Speicher_m3: 0,
  h_Speicher_m: 0,
  rho: 0,
  cp: 0,
  uA_Speicher: 0,
  h_Sensoren_m: 0,
  t_Raum: 0,
};
