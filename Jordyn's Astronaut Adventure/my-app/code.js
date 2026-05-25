

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab8ae457-0989-4b54-bcb8-b8702109b0c2","eab6b459-51c1-4ef0-97be-f7c1150c1401","aceb0b8a-a8a0-4d06-9b57-c4980bbcc514","08316e0d-3bc9-4c90-96cb-3cbc57f91ccc"],"propsByKey":{"ab8ae457-0989-4b54-bcb8-b8702109b0c2":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"eab6b459-51c1-4ef0-97be-f7c1150c1401":{"name":"sticker_34_1","sourceUrl":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png","frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"03rBgUkpKK_9hg1RkGHc820nxLAp_lB8","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/03rBgUkpKK_9hg1RkGHc820nxLAp_lB8/category_stickers/sticker_34.png"},"aceb0b8a-a8a0-4d06-9b57-c4980bbcc514":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5WoTuYk_S4u2cVouUWTxkVlEUw6lduwy/category_fantasy/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"5WoTuYk_S4u2cVouUWTxkVlEUw6lduwy","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5WoTuYk_S4u2cVouUWTxkVlEUw6lduwy/category_fantasy/floating_alien.png"},"08316e0d-3bc9-4c90-96cb-3cbc57f91ccc":{"name":"rocket1_1","sourceUrl":null,"frameSize":{"x":394,"y":333},"frameCount":1,"looping":true,"frameDelay":12,"version":"z825FhiErF0i694pEkGnXdp3tnUBUHGO","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":333},"rootRelativePath":"assets/08316e0d-3bc9-4c90-96cb-3cbc57f91ccc.png"}}};
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
// set velocity for the obstacle and the target


var backround = createSprite(200, 200);
backround.setAnimation("space_1");
var alien = createSprite(450, 140);
alien.setAnimation("floating_alien_1");
alien.scale = 0.2;
alien.velocityX = -3;
var astronout = createSprite(50, 306);
astronout.setAnimation("sticker_34_1");
astronout.scale = 0.2;
astronout.velocityX = 0;
var rocket = createSprite(450, 300);
rocket.setAnimation("rocket1_1");
rocket.scale = 0.2;
rocket.velocityX = -3;
//create the variables
var score = 0;
var health = 15;

function draw() {
  background("white");
  // BACKGROUND
  // draw the ground and other background


  if (astronout.isTouching(alien)) {
    health = health - 4;
    alien.x = randomNumber(450, 600);
    alien.y = randomNumber(50, 250);
  }
  if (astronout.isTouching(rocket)) {
    score = score + 2;
    rocket.x = randomNumber(500, 800);
    rocket.y = randomNumber(50, 250);
  }
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  astronout.velocityY = astronout.velocityY + 0.5;
  if (astronout.y > 305) {
    if (keyDown("up")) {
      astronout.velocityY = -12;
    } else {
      astronout.velocityY = 0;
      astronout.y = 305;
    }
  }
  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  if (alien.x < -20) {
    alien.x = randomNumber(450, 600);
    alien.y = randomNumber(50, 250);
  }
  if (rocket.x < -20) {
    rocket.x = randomNumber(500, 800);
    rocket.y = randomNumber(50, 250);
  }
  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (alien.x < -20) {
    alien.x = 420;
  }
  if (rocket.x < -20) {
    rocket.x = 420;
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("white");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("score:", 20, 30);
  text(score, 80, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health <= 0) {
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
