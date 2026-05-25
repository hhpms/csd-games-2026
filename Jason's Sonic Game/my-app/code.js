

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["835b990e-3801-47b7-a12e-5c0979be890e","fc615e39-6416-4d4e-89de-f3e10a40100a","93a6f6ce-dade-4928-b855-66e86d3c75d3","fe8a5739-a049-4ec5-81eb-e6b6033eab03"],"propsByKey":{"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"Spike_Sprite","sourceUrl":null,"frameSize":{"x":31,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"gL6evOkzIeKqQNzMTXBjM1JIfh4fCiP4","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":30},"rootRelativePath":"assets/835b990e-3801-47b7-a12e-5c0979be890e.png"},"fc615e39-6416-4d4e-89de-f3e10a40100a":{"name":"Ground_Sprite","sourceUrl":null,"frameSize":{"x":100,"y":38},"frameCount":1,"looping":true,"frameDelay":12,"version":"I5wyZLWUtIb4dkYDnty9gRC9Ilp2dOoJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":38},"rootRelativePath":"assets/fc615e39-6416-4d4e-89de-f3e10a40100a.png"},"93a6f6ce-dade-4928-b855-66e86d3c75d3":{"name":"Ring_Sprite","sourceUrl":null,"frameSize":{"x":120,"y":124},"frameCount":1,"looping":true,"frameDelay":12,"version":"yxZpC7dYui.39S1v_ElBf.Mv9ydZe3nN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":124},"rootRelativePath":"assets/93a6f6ce-dade-4928-b855-66e86d3c75d3.png"},"fe8a5739-a049-4ec5-81eb-e6b6033eab03":{"name":"Sonic_Sprite","sourceUrl":null,"frameSize":{"x":134,"y":172},"frameCount":3,"looping":true,"frameDelay":12,"version":"Zy5wJ4RMk0CUE6IGUY9YSSX6TrB72Dk6","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":344},"rootRelativePath":"assets/fe8a5739-a049-4ec5-81eb-e6b6033eab03.png"}}};
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
// Create the sprites
var Spike = createSprite(224, 230);
var Hedgehog = createSprite(90, 195);
var Ring = createSprite(200, 76);
var ground = createSprite(198, 320);
Spike.setAnimation("Spike_Sprite");
Hedgehog.setAnimation("Sonic_Sprite");
Ring.setAnimation("Ring_Sprite");
ground.setAnimation("Ground_Sprite");
ground.scale = 4;
Hedgehog.scale = 0.65;
Spike.scale = 2;
Ring.scale = 0.5;
// set velocity for the obstacle and the target
Spike.velocityX = -3;
Ring.velocityX = -3;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("#00BFFF");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (Hedgehog.isTouching(Spike)) {
    health = health - 1;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  if (Hedgehog.isTouching(Ring)) {
    score = score + 1;
    Ring.x = randomNumber(293, 500);
    Ring.y = randomNumber(23, 148);
  }
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  if (Hedgehog.y > 188) {
    Hedgehog.velocityY = 0;
  }
  // stop moving down

  // if the player presses the up arrow
  // start moving up
  if (keyWentDown("up")) {
    Hedgehog.velocityY = -5;
  }

  // if the player reaches the top of the jump
  // start moving down
  if (Hedgehog.y < 75) {
    Hedgehog.velocityY = 5;
  }


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  if (Ring.x < -5) {
    Ring.x = 400;
  }
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  if (Spike.x < -5) {
    Spike.x = 400;
  }
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score:", 280, 50);
  text(score, 350, 50);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("Blue");
    textSize(25);
    text("Better Keep Up Next Time!" , 40, 200);
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
