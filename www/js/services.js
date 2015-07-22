angular.module('starter.services', [])

.service('Settings', function() {
  
  this.host = 'http://lachasseauxbugs.fr/service';

})

.service('Canvas', function() {

  var self = this;
  this.isReady = false;
  this.domCanvas = null;

  this.ready = function() {};

  this.load = function() {

    requirejs(['js/canvas-game/canvasHandler', 'js/canvas-game/game', 'js/canvas-game/point', 'js/canvas-game/helper'], function(CanvasHandler, Game) {

      self.handler = new CanvasHandler();
      self.game = new Game(self.handler);
      self.game.init(function() {

        self.isReady = true;
        self.handler.setCanvas(self.domCanvas);
        self.game.start();

        self.ready();

      });

    });

  }

})

.service('LevelEditor', function() {

  var self = this;
  this.isReady = false;
  this.domCanvas = null;

  this.ready = function() {};

  this.load = function() {

    requirejs(['js/canvas-game/canvasHandler', 'js/canvas-game/game', 'js/canvas-game/point', 'js/canvas-game/helper'], function(CanvasHandler, Game) {

      self.handler = new CanvasHandler();
      self.game = new Game(self.handler);
      self.game.init(function() {

        self.isReady = true;
        self.handler.setCanvas(self.domCanvas);
        self.game.start();

        self.ready();

      });

    });

  }

})

;