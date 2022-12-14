import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _warriorInstances = 0;

  constructor(name:string) {
    super(name);
    Warrior._warriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Warrior._warriorInstances;
  }
}

export default Warrior;