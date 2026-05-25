

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3d0af5e0-6ac1-4040-a21f-f2bd0059b1e6","53f0220a-51b3-4c34-a384-4c75ba39cc1b","c03d6959-2a85-42ee-af57-f623106431ec","2bbfb3ca-215c-4376-b59b-6dbfd3365022"],"propsByKey":{"3d0af5e0-6ac1-4040-a21f-f2bd0059b1e6":{"name":"underground_1","sourceUrl":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png"},"53f0220a-51b3-4c34-a384-4c75ba39cc1b":{"name":"tyrannosaurus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/u8kTMkYc3EaF8ISVcwP3TrNnBeGANJrR/category_animals/tyrannosaurus.png","frameSize":{"x":345,"y":364},"frameCount":1,"looping":true,"frameDelay":2,"version":"u8kTMkYc3EaF8ISVcwP3TrNnBeGANJrR","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":345,"y":364},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u8kTMkYc3EaF8ISVcwP3TrNnBeGANJrR/category_animals/tyrannosaurus.png"},"c03d6959-2a85-42ee-af57-f623106431ec":{"name":"american_pizza_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png","frameSize":{"x":378,"y":374},"frameCount":1,"looping":true,"frameDelay":2,"version":"2XLgtp13LxzzFdqWStgaBH15LGgvaKpS","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":374},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png"},"2bbfb3ca-215c-4376-b59b-6dbfd3365022":{"name":"gameplaywacky_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"}}};
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
var sprite = createSprite(200, 200);
sprite.setAnimation("underground_1");
var dino = createSprite(200, 200);
dino.setAnimation("tyrannosaurus_1");
dino.scale = 0.4;
var pizza = createSprite(200, 100);
pizza.setAnimation("american_pizza_1");
pizza.scale = 0.2;
pizza.velocityX = 5;
var germ = createSprite(200, 150);
germ.setAnimation("gameplaywacky_03_1");
germ.scale = 0.2;
germ.velocityX = 5;
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background
  if (keyDown("up")) {
    dino.y = dino.y + -20;
  }
  if (keyDown("down")) {
    dino.y = dino.y + 20;
  }
  if (keyDown("left")) {
    dino.x = dino.x - 20;
  }
  if (keyDown("right")) {
    dino.x = dino.x + 20;
  }
  if (pizza.x > 400) {
    pizza.x = 0;
    pizza.y = randomNumber(0, 400);
  }
  if (germ.x > 400) {
    germ.x = 0;
    germ.y = randomNumber(0, 400);
  }


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (dino.isTouching(germ)) {
    health = health - 1;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  if (dino.isTouching(pizza)) {
    score = score + 1;
  }
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  fill("pink");
  textSize(20);
  text("Score", 59, 27);
  text(score, 120, 27);
  // add scoreboard and health meter
  fill("purple");
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
