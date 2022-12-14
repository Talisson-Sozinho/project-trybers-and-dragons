import { ELF_MAX_LIFE } from './helpers/constants';
import Race from './Race';

class Elf extends Race {
  private _maxLifePoints:number;
  private static elfInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf.elfInstances += 1;
    this._maxLifePoints = ELF_MAX_LIFE;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances() {
    return this.elfInstances;
  }
}

export default Elf;
