import 'phaser';

export default class BgScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  preload() {
    this.load.image('starfield', 'assets/backgrounds/starfield.png');
  }

  create() {
    this.add.image(400, 400, 'starfield');
    this.add.text(400, 400, 'GAME OVER', { fontSize: '40px' }).setOrigin(0.5);
    this.add.text(400, 500, 'Press ENTER to try again').setOrigin(0.5);
    this.enter = this.input.keyboard.addKey('ENTER');
    const mainScene = this.scene.get('MainScene');
    mainScene.scene.restart();
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start('MainScene');
    }
  }
}