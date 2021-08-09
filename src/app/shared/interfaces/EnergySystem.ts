export enum AlgorithmTrigger {
  time = 'time',
  post = 'post',
}

export interface EnergySystem {
  energySystemId: number;
  userId: number;
  name: string;
  nFahrplan: number;
  untermengeNFahrplan: number;
  optimierungshorizontMin: number;
  optimierungsgroesse: number;
  deltaT: number;
  stetigkeitsfaktor: number;
  prognosemethodeTh: number;
  prognosemethodeEl: number;
  qThZaehlerGesamt: boolean;
  qThZaehlerGetrennt: boolean;
  gewichtungsfaktorZufall: number;
  uaGeb: number;

  algorithmTrigger: AlgorithmTrigger;
  cronTriggerTime: string;
  maxHistoryDays: number;
  consumptionPostIntervalMin: number;
  latitude: number;
  longitude: number;
  region: string;
}

export const emptyEnergySystem: EnergySystem = {
  energySystemId: 0,
  userId: 0,
  name: 'New EnergySystem',
  nFahrplan: 5000,
  untermengeNFahrplan: 50,
  optimierungshorizontMin: 2000,
  optimierungsgroesse: 0,
  deltaT: 10,
  stetigkeitsfaktor: 5,
  prognosemethodeTh: 0,
  prognosemethodeEl: 0,
  qThZaehlerGesamt: false,
  qThZaehlerGetrennt: false,
  gewichtungsfaktorZufall: 0.25,
  uaGeb: 1,

  algorithmTrigger: AlgorithmTrigger.post,
  cronTriggerTime: '',
  maxHistoryDays: 20,
  consumptionPostIntervalMin: 15,
  latitude: 48.495949,
  longitude: 9.21191,
  region: '',
};

export const energySystemAttributeDescriptions: Map<string, string> = new Map<
  string,
  string
>([
  ['name', 'Name des Energiesystems'],
  [
    'nFahrplan',
    'Anzahl potenzieller Fahrpläne (Ganze Zahl zwischen 1 und 10.000 (Empfehlung))',
  ],
  [
    'untermengeNFahrplan',
    'Untermenge Fahrpläne für zusätzliche Nebenbedingungen (Ganze Zahl zwischen 0 und 100 (Empfehlung))',
  ],
  [
    'optimierungshorizontMin',
    'Zeithorizont, für den der Fahrplan erstellt werden soll (Ganze Zahl in Minuten, max. 4320 (Empfehlung))',
  ],
  [
    'optimierungsgroesse',
    '0: Minimaler Netzbezug (Maximale Eigenstromdeckung); 1: Minimale Netzeinspeisung (Maximale Produktionsdeckung)',
  ],
  [
    'deltaT',
    'Optimierungsintervall (Ganze Zahl in Minuten zwischen 5 und 15 (Empfehlung))',
  ],
  [
    'stetigkeitsfaktor',
    'Faktor, damit BHKW die Tendenz besitzt, den aktuellen Betriebszustand beizubehalten (Ganze Zahl zwischen 1 und 10 (Empfehlung))',
  ],
  [
    'prognosemethodeTh',
    'Ansätze (Heiz-) Wärmeprognose: 0: Einfacher Mittelwert über 3 Vortage; 1: Gewichteter Mittelwert über 3 Vortage ohne Temperaturkorrektur; 2: Gewichteter Mittelwert über 3 Vortage mit Temperaturkorrektur',
  ],
  [
    'prognosemethodeEl',
    'Ansätze Stromprognose: 0: Mittelwert über 7 Vortage; 1: Mittelwert über 4 Vortage mit Unterscheidung in Werktag/Nicht-Werktag',
  ],
  [
    'qThZaehlerGesamt',
    'False: Zähler nicht vorhanden; True: Bestimmung Wärmeverbrauch (Heizung und BWW zusammen) über Wärmemengenzähler',
  ],
  [
    'qThZaehlerGetrennt',
    'False: Zähler nicht vorhanden; True: Bestimmung Heiz- und BWW-Wärmeverbrauch getrennt über Wärmemengenzähler',
  ],
  [
    'gewichtungsfaktorZufall',
    'Faktor zur Gewichtung des Zufalls der Monte Carlo Methode (Ganze Zahl zwischen 0 (keine Gewichtung) und 0.5 (Empfehlung)) ',
  ],
  [
    'uaGeb',
    'Defaultwert für den Wärmedurchgang des Gebäudes (Zahl > 0) / kW/K',
  ],
  [
    'algorithmTrigger',
    'post: Fahrplananfrage wird von Anlage gestellt; time: Fahrplan wird zu einem festen Zeitpunkt erstellt',
  ],
  [
    'cronTriggerTime',
    'Zeitintervall für Fahrplanerstellung nach: "https://crontab.guru/#*_*_*_*_*", falls algorithm_trigger = time',
  ],
  [
    'maxHistoryDays',
    'Anzahl gespeicherter Tage der Verbrauchswerte (Ganze Zahl in Tagen zwischen min. 14 und 28 (Empfehlung))',
  ],
  [
    'consumptionPostIntervalMin',
    'Messdatenerfassungsintervall der Verbrauchsdaten (Ganze Zahl in Minuten)',
  ],
  ['latitude', 'Geographische Breite des Anlagenstandorts'],
  ['longitude', 'Geographische Länge des Anlagenstandorts'],
]);
