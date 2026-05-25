

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f27138c6-c63b-4060-8398-1881c62fd618","3dc6bd0b-35db-42d1-a8b9-c09caddb1c58","6a356bf6-94b4-4ef4-8877-ce1455f68f54"],"propsByKey":{"f27138c6-c63b-4060-8398-1881c62fd618":{"name":"Meme_Man_on_transparent_background.webp.png_1","sourceUrl":null,"frameSize":{"x":250,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"uJaOq079f3dzTY2NcieVHUDkl3FgX5Fu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":250},"rootRelativePath":"assets/f27138c6-c63b-4060-8398-1881c62fd618.png"},"3dc6bd0b-35db-42d1-a8b9-c09caddb1c58":{"name":"download.jpg_1","sourceUrl":null,"frameSize":{"x":318,"y":159},"frameCount":1,"looping":true,"frameDelay":12,"version":"bTdJFGjyEW4a_290hJ510Uqn6a1yOd6K","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":159},"rootRelativePath":"assets/3dc6bd0b-35db-42d1-a8b9-c09caddb1c58.png"},"6a356bf6-94b4-4ef4-8877-ce1455f68f54":{"name":"download (1).jpg_1","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"zRDR9idjLKGCal6HHbHguv2.YByu91My","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/6a356bf6-94b4-4ef4-8877-ce1455f68f54.png"}}};
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
var guy = createSprite(50, 306);
var obsticle = createSprite(300, 300);
var target = createSprite(200, 200);
// set velocity for the obstacle and the target

target.velocityX = -3;
obsticle.velocityX = -3;

//create the variables
var score = 0;
var health = 10;

function draw() {
  // BACKGROUND
  // draw the ground and other background

  background("green");
  guy.setAnimation("Meme_Man_on_transparent_background.webp.png_1");
  guy.scale = 0.3;
  obsticle.setAnimation("download.jpg_1");
  obsticle.scale = 0.3;
  target.setAnimation("download (1).jpg_1");
  target.scale = 0.3;

  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (guy.isTouching(obsticle)) {
    health = health-1;
    obsticle.x = 450;
  }
  if (guy.isTouching(target)) {
    score = score + 1;
    target.x = 450;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (guy.y > 305) {
    if (keyWentDown("up")) {
      guy.velocityY = -5;
    } else {
      guy.velocityY = 0;
    }
  }
  if (guy.y < 100) {
    guy.velocityY = 5;
  }

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (obsticle.x < 0) {
    obsticle.x = 400;
  }
  if (target.x < 0) {
    target.x = 400;
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  fill("black");
  textSize(20);
  text("Score:", 20, 30);
  text(score, 80, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health == 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
  }
  if (score == 15) {
    background("black");
    fill("green");
    textSize(50);
    text("You Win!" , 40, 200);
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
