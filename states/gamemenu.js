var GameMenu = function() {};

GameMenu.prototype = {

  menuConfig: {
    startY: 320,
    startX: 70
  },
  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Iceblocks", {
      font: 'bold 40pt Nexa',
      fill: '#ffd73a',
      align: 'center',
      textTransform: 'uppercase'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');

    this.addMenuOption('COMENZAR', function () {
      game.state.start("Game");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
