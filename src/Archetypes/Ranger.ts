import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _rangerStances = 0;

  constructor(name:string) {
    super(name);
    Ranger._rangerStances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger._rangerStances;
  }
}

export default Ranger;