import * as SCENES from '../constants/scenes.const';

export class GameScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({key: SCENES.GAME});
  }

  init() {
  }

  preload() {
    //this.load.image("myImage", "../assets/phaser.png");
  }

  create() {
    //phaserSprite = this.add.sprite(400, 300, "myImage");
  }

  update() {
  }
}
