import "phaser";
import { config } from './configs/config';
import * as SCENES from './constants/scenes.const';
import { GameScene } from "./scenes/game.scene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add(SCENES.GAME, GameScene);
    this.scene.start(SCENES.GAME);
  }
}

window.addEventListener("load", () => {
  const game = new Game();
});
