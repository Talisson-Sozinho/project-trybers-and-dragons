import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const [player1, player2, player3] = [
  new Character('Illidan'), 
  new Character('Tyrande'), 
  new Character('Sylvanas'),
];

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const [monster1, monster2] = [
  new Monster(),
  new Dragon(),
];

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles:Battle[]):void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};
export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp, pve };
export { runBattles };
