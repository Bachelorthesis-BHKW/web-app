export default interface ESConsumption {
  energySystemId: number;
  date: string;
  holiday: boolean;
  verbrauchStrom: number;
  verbrauchHeizung: number;
  verbrauchBww: number;
  aussentemperatur: number;
}
