import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(protected _lifePoints = 85, protected _strength = 63) { }

  get strength():number { return this._strength; }
  get lifePoints():number { return this._lifePoints; }

  receiveDamage(attackPoints:number):number {
    const damage = attackPoints > 0 ? attackPoints : 0;

    const newLifePoints = this.lifePoints - damage > 0
      ? this.lifePoints - damage : -1;

    this._lifePoints = newLifePoints;

    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;