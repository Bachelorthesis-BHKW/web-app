import { Parameters } from './ESComponent';

export default interface PV extends Parameters {
  kollpower_W: number;
  kollsteigung: number;
  kolllazi: number;
  deltaWp: number;
  etakoll: number;
  albedo: number;
}

export const emptyPv: PV = {
  kollpower_W: 0,
  kollsteigung: 0,
  kolllazi: 0,
  deltaWp: 0.0047,
  etakoll: 0,
  albedo: 0.2,
};
