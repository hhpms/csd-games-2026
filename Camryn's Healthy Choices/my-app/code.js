

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ea00159d-fb2c-445e-8552-3078ab3779f8","02bb0f32-ca9b-4515-ad42-50de308f2c56","0aa92445-15f9-4d3b-abf5-96686259a74d","76a70cdf-4c25-4222-8374-90f48f27efe5","e3d670e0-080e-4617-a866-c02647eac7d3"],"propsByKey":{"ea00159d-fb2c-445e-8552-3078ab3779f8":{"name":"kitchen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"02bb0f32-ca9b-4515-ad42-50de308f2c56":{"name":"american_hamburger_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"0aa92445-15f9-4d3b-abf5-96686259a74d":{"name":"broccoli_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png","frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png"},"76a70cdf-4c25-4222-8374-90f48f27efe5":{"name":"pupilportrait_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_soOUnYYJgtcOzApwsyuf4sfPxx8yfvZ/category_faces/pupilportrait_04.png","frameSize":{"x":342,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"_soOUnYYJgtcOzApwsyuf4sfPxx8yfvZ","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":342,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_soOUnYYJgtcOzApwsyuf4sfPxx8yfvZ/category_faces/pupilportrait_04.png"},"e3d670e0-080e-4617-a866-c02647eac7d3":{"name":"kidportrait_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png","frameSize":{"x":314,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03EvfUX9qjzBAO2yxqRQ5KQWDGnKJXMy/category_faces/kidportrait_05.png"}}};
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
playSound("https://www.youtube.com/watch?v=MJpQINiU6PA", true);
var smile = createSprite(200, 200);
var kitchen = createSprite(200, 200);
var burger = createSprite(200, randomNumber(0, 400));
burger.scale = 0.2;
var brocoli = createSprite(400, 300);
brocoli.scale = 0.2;
// Create the sprites
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;
var girl = createSprite(56, 299);
girl.scale = 0.4;
burger.velocityX = -6;
brocoli.velocityX = -6;
brocoli.x = 700;
burger.x = 405;

function draw() {
  // BACKGROUND
  burger.setAnimation("american_hamburger_1");
  girl.setAnimation("pupilportrait_04_1");
  brocoli.setAnimation("broccoli_1");
  kitchen.setAnimation("kitchen_1");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  if (girl.isTouching(burger)) {
    health = health - 1;
    girl.setAnimation("kidportrait_05_1");
  }
  if (girl.isTouching(brocoli)) {
    score = score + 1;
    girl.setAnimation("kidportrait_05_1");
  }
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  if (keyDown("space")) {
    girl.velocityY = -9;
  }
  if (girl.y < 50) {
    girl.velocityY = 6;
  }
  if (girl.y > 300) {
    girl.velocityY = 0;
    girl.y = 299;
  }
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  if (burger.x < 0) {
    burger.x = 400;
    burger.y = randomNumber(0, 400);
  }
  if (brocoli.x < 0) {
    brocoli.x = 400;
    brocoli.y = randomNumber(0, 400);
  }
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  fill("black");
  textSize(20);
  text("Score:", 9, 30);
  text(score, 70, 30);
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
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
