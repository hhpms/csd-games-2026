

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab498d8e-483b-4c48-b938-ae265d894742","5e1f81f3-618e-4f87-81f6-5f5aa38c828b","9ac319c0-ff87-433c-a2db-84e03a2a9df4","663c5eff-ae3d-4b9d-b485-ce4ae783b4a5"],"propsByKey":{"ab498d8e-483b-4c48-b938-ae265d894742":{"name":"Background","sourceUrl":"assets/api/v1/animation-library/gamelab/5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj/category_backgrounds/tennis_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5YUyTyvvcRaIEyA1Fy3tOZxpBJD8ZdEj/category_backgrounds/tennis_court.png"},"5e1f81f3-618e-4f87-81f6-5f5aa38c828b":{"name":"Player 1","sourceUrl":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h_LF7PqnHba0BOlL85_9g6TgRHqzd_Lh/category_emoji/emoji_19.png"},"9ac319c0-ff87-433c-a2db-84e03a2a9df4":{"name":"ai","sourceUrl":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png","frameSize":{"x":304,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"LW3NVAYESDS18f5zmtSQbke0B78Bo_I2","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png"},"663c5eff-ae3d-4b9d-b485-ce4ae783b4a5":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/j.BvyKc65wMMqZSB1GWQZm.J8DQG6ukA/category_sports/tennisball.png"}}};
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

//GAME SETUP
var court = createSprite(200, 200);
court.setAnimation("Background");
var player1 = createSprite(200, 250);
player1.setAnimation("Player 1");
player1.scale = 0.20;
var ai = createSprite(200, 50);
ai.setAnimation("ai");
ai.scale = 0.20;
var ball = createSprite(200, 200);
ball.setAnimation("ball");
ball.scale = 0.10;
var gameOver = false;

function draw() {
  ai.x = ball.x;
  if (keyDown("down")) {
      player1.y = player1.y + 5;
    }
  if (keyDown("up")) {
      player1.y = player1.y - 5;
    }
  if (keyDown("left")) {
      player1.x = player1.x - 5;
    }
  if (keyDown("right")) {
      player1.x = player1.x + 5;
    }
  if (player1.y < 150) {
      player1.y = 150;
    }
  if (ai.y < 102) {
      ai.y = 102;
    }
  if (player1.y > 360) {
      player1.y = 360;
    }
  if (ai.y > 15) {
      ai.y = 15;
    }
  if (player1.x < 45) {
      player1.x = 45;
    }
  if (player1.x > 350) {
      player1.x = 350;
    }
  if (ai.x > 350) {
      ai.x = 350;
    }
  if (ai.x < 45) {
      ai.x = 45;
    }
  if (player1.isTouching(ball)) {
      ball.velocityY = -3;
      ball.velocityX = randomNumber(-4, 4);
    }
  if (ai.isTouching(ball)) {
      ball.velocityY = 3;
      ball.velocityX = randomNumber(-4, 4);
    }
  if (ball.x > 350) {
    ball.velocityX = -3;
  }
  if (ball.x < 0) {
    ball.velocityX = 3;
  }
  if (ball.y > 400) {
    gameOver = true;
  }
  drawSprites();
  if (gameOver) {
    background("black");
    fill("white");
    text("Game Over", 200, 200);
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
