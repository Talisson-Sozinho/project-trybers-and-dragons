import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _necromancerStances = 0;

  constructor(name:string) {
    super(name);
    Necromancer._necromancerStances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Necromancer._necromancerStances;
  }
}

export default Necromancer;