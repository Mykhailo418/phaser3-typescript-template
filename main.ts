import "phaser";
import { GameScene } from "./scenes/gameScene";

const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: GameScene
};

window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
});
