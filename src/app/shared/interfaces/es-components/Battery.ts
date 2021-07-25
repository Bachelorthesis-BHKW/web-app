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

export const batteryAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['W_el_max_kWh', 'Maximale Kapazität Batterie / kWh'],
  ['P_el_Charge_max_kW', 'Maximale Ladeleistung Batterie / kW'],
  ['P_el_Discharge_max_kW', 'Maximale Entladeleistung Batterie / kW'],
  ['Charge_eff', 'Ladeeffizienz Batterie (Wert zwischen 0 und 1)'],
  ['Discharge_eff', 'Entladeeffizienz Batterie ( Wert zwischen 0 und 1)'],
  ['Inverter_eff', 'Effizienz Wechselrichter (Wert zwischen 0 und 1)'],
]);
