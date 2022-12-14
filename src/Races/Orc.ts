import { ORC_MAX_LIFE } from './helpers/constants';
import Race from './Race';

class Orc extends Race {
  private _maxLifePoints:number;
  private static orcInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Orc.orcInstances += 1;
    this._maxLifePoints = ORC_MAX_LIFE;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances() {
    return this.orcInstances;
  }
}

export default Orc;
