import { DWARF_MAX_LIFE } from './helpers/constants';
import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints:number;
  private static dwarfInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.dwarfInstances += 1;
    this._maxLifePoints = DWARF_MAX_LIFE;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances() {
    return this.dwarfInstances;
  }
}

export default Dwarf;
