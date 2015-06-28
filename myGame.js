//THIS IS THE GAME PAGE TEMPLATE//

templates.gamePage = [
  Game.prototype.playScene = function() {
      return this.strategy();
  }

  var sceneThree = function() {
       console.log('Third scene logic here');

      return {
          text: 'scene3 played',
      }
  }

  var sceneTwo = function() {
      console.log('Second scene logic here');

      return {
          text: 'scene2 played',
          next: sceneThree
      }
  }

  var sceneOne = function() {
      console.log('First scene logic here');

      // based upon some conditions return next scene
      // let's keep it simple and just return sceneTwo
      return {
          text: 'scene1 played',
          next: sceneTwo
      }
  }

  var game = new Game(sceneOne);
  var scene;

  $('#playGame').click(function() {
      scene = game.playScene();

      $('#current').html(scene.text);

      if(scene.next !== undefined) {
          game = new Game(scene.next);
      }
  });
