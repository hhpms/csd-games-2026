

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["300a47ef-feb3-40fe-9785-4d87ed10cedf","7099b5df-3e33-4f1b-bd14-b445c17588f5","ff07f951-6d75-4e92-9645-1a5560e2be5f","3bc66f25-fc39-4392-9596-4a502e75c980"],"propsByKey":{"300a47ef-feb3-40fe-9785-4d87ed10cedf":{"name":"fly_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"7099b5df-3e33-4f1b-bd14-b445c17588f5":{"name":"powerupYellow_bolt_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qmAPnfWrN7w3vAVqAt8dBkNe50ZUxu6h/category_video_games/powerupYellow_bolt.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"qmAPnfWrN7w3vAVqAt8dBkNe50ZUxu6h","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qmAPnfWrN7w3vAVqAt8dBkNe50ZUxu6h/category_video_games/powerupYellow_bolt.png"},"ff07f951-6d75-4e92-9645-1a5560e2be5f":{"name":"hammer_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH/category_video_games/hammer.png","frameSize":{"x":340,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DjlavQQXkWpC6PJbUgACUcaFTCgz7eYH/category_video_games/hammer.png"},"3bc66f25-fc39-4392-9596-4a502e75c980":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//1) Read and run the code to understand how it works, and what is going wrong.
//background
var bg = createSprite(200, 200);
bg.setAnimation("cave_1");
var points = 0;
var coin = createSprite(200, 100);
coin.setAnimation("powerupYellow_bolt_1");
var ghost = createSprite(200, 300);
ghost.setAnimation("fly_bot_1");
ghost.scale = 0.5;
var hammer = createSprite(200, 200);
hammer.setAnimation("hammer_1");
hammer.scale = .2;

function draw() {
  //2) Identify the code that increases the score.
  if (ghost.isTouching(coin)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    coin.x = randomNumber(0, 400);
    coin.y = randomNumber(0, 400);
    hammer.x = randomNumber(0, 400);
    hammer.y = randomNumber(0, 400);

  }
  if(keyDown("up")) {
    ghost.y = ghost.y - 5;
  }
  if(keyDown("down")) {
    ghost.y = ghost.y + 5;
  }
  if(keyDown("left")) {
    ghost.x = ghost.x - 5;
  }
  if(keyDown("right")) {
    ghost.x = ghost.x + 5;
  }
  drawSprites();
  text("Points: " + points, 25, 25);
  if (ghost.isTouching(hammer)) {
    background("blue");
    fill("black");
    textSize(12);
    text("GAME OVER", 178, 217);
    textSize(50);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
