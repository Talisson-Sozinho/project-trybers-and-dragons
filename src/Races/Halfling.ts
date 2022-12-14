import { HALFLINE_MAX_LIFE } from './helpers/constants';
import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints:number;
  private static halflingInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling.halflingInstances += 1;
    this._maxLifePoints = HALFLINE_MAX_LIFE;
  }

  get maxLifePoints() { return this._maxLifePoints; }

  static createdRacesInstances() {
    return this.halflingInstances;
  }
}

export default Halfling;
