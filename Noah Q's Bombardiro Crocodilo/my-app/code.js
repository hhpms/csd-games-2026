

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["131c1b62-e9d5-4743-b757-d27c776d8ee5","bac0f17f-fc2a-44dd-93bd-8154b3c5b241","c81b4de7-adc4-422f-9767-9c97d87e90b7"],"propsByKey":{"131c1b62-e9d5-4743-b757-d27c776d8ee5":{"name":"bomb","sourceUrl":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/131c1b62-e9d5-4743-b757-d27c776d8ee5.png","frameSize":{"x":492,"y":242},"frameCount":1,"looping":true,"frameDelay":4,"version":"iUT4K3K154M1C3LFXETMX3m1EKIU2MQB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":242},"rootRelativePath":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/131c1b62-e9d5-4743-b757-d27c776d8ee5.png"},"bac0f17f-fc2a-44dd-93bd-8154b3c5b241":{"name":"satur","sourceUrl":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/bac0f17f-fc2a-44dd-93bd-8154b3c5b241.png","frameSize":{"x":492,"y":244},"frameCount":1,"looping":true,"frameDelay":4,"version":"AHC6sMjQD.Rg_TIlV4Xpf0.GUSK6kCzY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":244},"rootRelativePath":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/bac0f17f-fc2a-44dd-93bd-8154b3c5b241.png"},"c81b4de7-adc4-422f-9767-9c97d87e90b7":{"name":"anderdingus","sourceUrl":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/c81b4de7-adc4-422f-9767-9c97d87e90b7.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"J.5P_RyD.IbxGgfNQh1rDWAg_AuXj8CI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/c4ac97e9-bdda-4a56-a29b-52e5ace131c2/c81b4de7-adc4-422f-9767-9c97d87e90b7.png"}}};
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

var bombardiol = createSprite(0, 200);
bombardiol.setAnimation("bomb");
bombardiol.scale = 0.3;
var satur = createSprite(400, randomNumber(0, 400));
satur.setAnimation("satur");
satur.scale = 0.3;
var anderdingus = createSprite(400, randomNumber(0, 400));
anderdingus.setAnimation("anderdingus");
anderdingus.scale = 0.1;
//GAME SETUP
// Create the sprites
// set velocity for the obstacle and the target
anderdingus.velocityX = -2;
satur.velocityX = -2;


//create the variables
var score = 0;
var health = 100;

function draw() {
  background("cyan");
  
  if (keyDown("up")) {
    bombardiol.y = bombardiol.y + -5;
  }
  if (keyDown("down")) {
    bombardiol.y = bombardiol.y + 5;
  }
  if (keyDown("left")) {
    bombardiol.x = bombardiol.x + -5;
  }
  if (keyDown("right")) {
    bombardiol.x = bombardiol.x + 5;
  }
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (bombardiol.isTouching(anderdingus)) {
    health = health - 1;
  }
  if (bombardiol.isTouching(satur)) {
    score = score + 1;
  }

  // if the player touches the target
  // the score goes up, the target resets

  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  if (anderdingus.x < -50) {
    anderdingus.x = 450;
    anderdingus.y = randomNumber(0, 400);
  }
  if (bombardiol.x < 0) {
    bombardiol.x = 400;
  }
  if (bombardiol.x > 400) {
    bombardiol.x = 0;
  }
  if (bombardiol.y < 0) {
    bombardiol.y = 400;
  }
  if (bombardiol.y > 400) {
    bombardiol.y = 0;
  }
  if (satur.x < -50) {
    satur.x = 450;
    satur.y = randomNumber(0, 400);
  }
  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("yellow");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  fill("yellow");
  textSize(20);
  text("score:", 100, 30);
  text (score, 170, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("green");
    fill("red");
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
