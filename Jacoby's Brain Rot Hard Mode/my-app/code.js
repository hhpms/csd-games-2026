

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fd4f8019-4efc-46ed-a3f9-bcef3bb32d83","9c3d69d5-f7e7-4295-b27c-2bdaade7f780","a0ce6fc9-1246-4b92-8306-5d4cda2812a8"],"propsByKey":{"fd4f8019-4efc-46ed-a3f9-bcef3bb32d83":{"name":"ttt (2).png_1","sourceUrl":null,"frameSize":{"x":213,"y":857},"frameCount":1,"looping":true,"frameDelay":12,"version":"MEiYaNs_1B_BT9Qb0S2ivcUnCrs.MWBy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":213,"y":857},"rootRelativePath":"assets/fd4f8019-4efc-46ed-a3f9-bcef3bb32d83.png"},"9c3d69d5-f7e7-4295-b27c-2bdaade7f780":{"name":"capuchina (1).png_1","sourceUrl":null,"frameSize":{"x":230,"y":768},"frameCount":1,"looping":true,"frameDelay":12,"version":"aZUcUoGwlD8BfqcSkVkr8CmABzxPu6yM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":768},"rootRelativePath":"assets/9c3d69d5-f7e7-4295-b27c-2bdaade7f780.png"},"a0ce6fc9-1246-4b92-8306-5d4cda2812a8":{"name":"Untitled.png_1","sourceUrl":null,"frameSize":{"x":502,"y":546},"frameCount":1,"looping":true,"frameDelay":12,"version":"wt.6K2mZgY3rzC8yEmvJnvKieTwnOSTW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":502,"y":546},"rootRelativePath":"assets/a0ce6fc9-1246-4b92-8306-5d4cda2812a8.png"}}};
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

var robux = createSprite(200, 200);
var ballerina = createSprite(10, 200);
var ttt = createSprite(400, 200);
ballerina.setAnimation("capuchina (1).png_1");
ttt.setAnimation("ttt (2).png_1");
robux.setAnimation("Untitled.png_1");
ballerina.scale = 0.07;
ttt.scale = 0.1;
robux.scale = 0.05;
var robuxamount = 0;
var health = 100;

function draw() {
  background("skyblue");
  // BACKGROUND
  // draw the ground and other background
  if (keyDown("up")) {
    ballerina.velocityY = -5;
  } else {
    ballerina.velocityY = 0;
  }
  if (keyDown("down")) {
    ballerina.velocityY = 5;
  }
  if (keyDown("right")) {
    ballerina.velocityX = 5;
  } else {
    ballerina.velocityX = 0;
  }
  if (keyDown("left")) {
    ballerina.velocityX = -5;
  }
  if (ballerina.isTouching(ttt)) {
    health = 100 - 100;
  }

  if (ttt.x == 0) {
    ttt.x = 400;
    ttt.y = ballerina.y;
  }

  ttt.velocityX = -10;
  if (ballerina.isTouching(robux)) {
    robux.x = randomNumber(0, 250);
    robux.y = randomNumber(10, 390);
    robuxamount = robuxamount + 1;
  }
  text("robux: " + robuxamount, 5, 15);
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health == 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
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
