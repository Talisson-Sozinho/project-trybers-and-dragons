import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

const PLAYER_IS_DEAD = -1;

class PVE extends Battle {
  constructor(private _player:Fighter, private additionalMobs:SimpleFighter[]) {
    super(_player);
  }

  fight():number {
    const playerIsDead = this.additionalMobs.some((mob) => {
      while (
        mob.lifePoints !== PLAYER_IS_DEAD 
        && super.fight() !== PLAYER_IS_DEAD
      ) {
        mob.attack(this._player);
        this._player.attack(mob);
      }
      return super.fight() === PLAYER_IS_DEAD;
    });

    return playerIsDead ? -1 : 1;
  }
}

export default PVE;