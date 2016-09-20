var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('GameMenu','states/gamemenu.js');
    game.load.script('game', 'states/Game.js');
    game.load.script('GameOver','states/gameover.js');
  },

  loadBgm: function () {
    // thanks Kevin Macleod at http://incompetech.com/
    game.load.audio('adventure', 'assets/bgm/adventure.mp3');
    game.load.audio('final', 'assets/bgm/finalsong.wav');
  },
  // varios freebies found from google image search
  loadImages: function () {
    game.load.image('menu-bg', 'assets/images/background-start.png');
    game.load.image('gameover-bg', 'assets/images/gameover-bg.png');
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['Nexa'],
        urls: ['assets/style/nexa.css']
      }
    }
  },
  preload: function () {
    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();
  },

  addGameStates: function () {
    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
  },

  addGameMusic: function () {
    music = game.add.audio('adventure');
    music.loop = true;
    music.play();
  },

  create: function() {
    this.addGameStates();
    this.addGameMusic();

    game.state.start("GameMenu");
  }
};
