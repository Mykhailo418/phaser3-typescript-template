export class GameScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "GameScene"
    });
  }

  preload(): void {
    //this.load.image("myImage", "../assets/phaser.png");
  }

  create(): void {
    //phaserSprite = this.add.sprite(400, 300, "myImage");
  }

  update(): void {
    
  }
}
