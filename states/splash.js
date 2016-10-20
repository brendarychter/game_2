var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('gamemenu','states/gamemenu.js');
    game.load.script('game', 'states/Game.js');
    game.load.script('gameover','states/gameover.js');
  },
  // varios freebies found from google image search
  loadImages: function () {
    game.load.image('menu-bg', 'assets/img/splash.png');
    //game.load.image('gameover-bg', 'assets/images/gameover.png');
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
  },

  addGameStates: function () {
    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
  },

  create: function() {
    this.addGameStates();

    game.state.start("GameMenu");
  }
};
