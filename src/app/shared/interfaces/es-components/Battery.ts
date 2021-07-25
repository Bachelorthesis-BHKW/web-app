import { Parameters } from './ESComponent';

export default interface Battery extends Parameters {
  W_el_max_kWh: number;
  P_el_Charge_max_kW: number;
  P_el_Discharge_max_kW: number;
  Charge_eff: number;
  Discharge_eff: number;
  Inverter_eff: number;
}

export const emptyBattery: Battery = {
  W_el_max_kWh: 0,
  P_el_Charge_max_kW: 0,
  P_el_Discharge_max_kW: 0,
  Charge_eff: 0,
  Discharge_eff: 0,
  Inverter_eff: 0,
};
