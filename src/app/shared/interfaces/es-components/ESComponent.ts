import { ESComponentType } from './ESComponentType';

export default interface ESComponent {
  esComponentId: number;
  energySystemId: number;
  name: string;
  type: ESComponentType;
  kenngroessen: Parameters;

  currentsPostIntervalMin: number;
  maxHistoryDays: number;
  circularBufferMax: number;
  circularBufferPointer: number;
}

export interface Parameters {}

export const emptyESComponent: ESComponent = {
  esComponentId: 0,
  name: '',
  circularBufferPointer: 0,
  circularBufferMax: 0,
  kenngroessen: {},
  type: ESComponentType.CHP,
  currentsPostIntervalMin: 1,
  energySystemId: 0,
  maxHistoryDays: 3,
};
