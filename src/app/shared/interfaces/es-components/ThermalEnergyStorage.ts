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
  ruecklauftemp_Speicher: number;
  vorlauftemp_max_waermeerzeuger: number;
  bodentemp_leer: number;
  bodentemp_voll: number;
  deckeltemp_leer: number;
  deckeltemp_voll: number;
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
  ruecklauftemp_Speicher: 0,
  vorlauftemp_max_waermeerzeuger: 0,
  bodentemp_leer: 0,
  bodentemp_voll: 0,
  deckeltemp_leer: 0,
  deckeltemp_voll: 0,
};

export const tesAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  [
    'speichertemp_leer',
    'Speichertemperatur-Array zur Definition des minimalen Speicherfüllstands (Speicher leer) / °C',
  ],
  [
    'speichertemp_voll',
    'Speichertemperatur-Array zur Definition des maximalen Speicherfüllstands (Speicher voll) / °C',
  ],
  ['v_Speicher_m3', 'Volumen Wärmespeicher / m^3'],
  ['h_Speicher_m', 'Höhe Wärmespeicher / m'],
  ['rho', 'Dichte Speichermedium / kg/m^3'],
  ['cp', 'Spezifische Wärmekapazität Speichermedium / kJ/(kg*K)'],
  ['uA_Speicher', 'Wärmedurchgang Wärmespeicher / kW/K'],
  ['h_Sensoren_m', 'Array mit absoluen Höhen der Temperatursensoren / m'],
  ['t_Raum', 'Mittlere Raumtemperatur / °C'],
  [
    'ruecklauftemp_Speicher',
    'Mittlere Rücklauftemperatur in den Speicher / °C',
  ],
  [
    'vorlauftemp_max_waermeerzeuger',
    'Maximale Vorlauftemperatur der Wärmeerzeuger / °C',
  ],
  ['bodentemp_leer', 'Bodentemperatur bei Speicher leer / °C'],
  ['bodentemp_voll', 'Bodentemperatur bei Speicher voll / °C'],
  ['deckeltemp_leer', 'Deckeltemperatur bei Speicher leer / °C'],
  ['deckeltemp_voll', 'Deckeltemperatur bei Speicher voll / °C'],
]);
