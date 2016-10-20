var Options = function(game) {};

Options.prototype = {

  menuConfig: {
    className: "inverse",
    startY: 260,
    startX: "center"
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Iceblocks", {
      font: 'bold 60pt Nexa',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  create: function () {
    game.add.sprite(0, 0, 'options-bg');
    game.add.existing(this.titleText);
  }
};

Phaser.Utils.mixinPrototype(Options.prototype, mixins);
