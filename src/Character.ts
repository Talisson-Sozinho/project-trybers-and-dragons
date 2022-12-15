import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy:Energy;

  constructor(private _name:string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race():Race { return this._race; }
  get archetype():Archetype { return this._archetype; }
  get lifePoints():number { return this._lifePoints; }
  get strength():number { return this._strength; }
  get defense():number { return this._defense; }
  get dexterity():number { return this._dexterity; }
  get energy():Energy { return JSON.parse(JSON.stringify(this._energy)); }

  receiveDamage(attackPoints: number): number {
    const damage = (attackPoints - this.defense > 0) 
      ? attackPoints - this.defense : 1;
    
    const newLifePoints = this.lifePoints - damage > 0
      ? this.lifePoints - damage : -1;

    this._lifePoints = newLifePoints;

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter):void {
    enemy.receiveDamage(this.strength);
  }

  levelUp():void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = newMaxLifePoints > this.race.maxLifePoints 
      ? this.race.maxLifePoints : newMaxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}

export default Character;