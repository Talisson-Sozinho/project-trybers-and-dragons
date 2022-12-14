import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _mageInstances = 0;

  constructor(name:string) {
    super(name);
    Mage._mageInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage._mageInstances;
  }
}

export default Mage;