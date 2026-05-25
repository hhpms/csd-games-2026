

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f44677cb-9c60-4815-9f15-805e0c7fee8d","81f0d0d5-a360-4bd7-9781-545c7542ba27","bb74afec-4076-49c0-85f2-277a35d86f83","e0e94b06-037f-4ebe-a4c8-b53d0ea2995d","831d9370-2b57-4707-beaa-10d8ce177801","e19d1edd-1d74-47d2-9adb-ca094986f726","95946563-3f3d-4ab1-a042-e944dd38ec08"],"propsByKey":{"f44677cb-9c60-4815-9f15-805e0c7fee8d":{"name":"ducky_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png","frameSize":{"x":395,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png"},"81f0d0d5-a360-4bd7-9781-545c7542ba27":{"name":"codeBG.jpg_1","sourceUrl":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/81f0d0d5-a360-4bd7-9781-545c7542ba27.png","frameSize":{"x":790,"y":525},"frameCount":1,"looping":true,"frameDelay":4,"version":"cdvAKcSYTWmmTMTRXbO6u0GnSmSVDwGN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":790,"y":525},"rootRelativePath":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/81f0d0d5-a360-4bd7-9781-545c7542ba27.png"},"bb74afec-4076-49c0-85f2-277a35d86f83":{"name":"retrocreature_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"e0e94b06-037f-4ebe-a4c8-b53d0ea2995d":{"name":"mix-walk1.png_1","sourceUrl":null,"frameSize":{"x":168,"y":240},"frameCount":4,"looping":true,"frameDelay":12,"version":"KbgayH.sh2EgdCTLwHIZ8uDRNpPcQH11","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":480},"rootRelativePath":"assets/e0e94b06-037f-4ebe-a4c8-b53d0ea2995d.png"},"831d9370-2b57-4707-beaa-10d8ce177801":{"name":"mix-walk_jump.png_1","sourceUrl":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/831d9370-2b57-4707-beaa-10d8ce177801.png","frameSize":{"x":134,"y":235},"frameCount":1,"looping":true,"frameDelay":4,"version":"z.9mvsEFv0A0QNFqgEBrqsKXcsYBp4z8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":235},"rootRelativePath":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/831d9370-2b57-4707-beaa-10d8ce177801.png"},"e19d1edd-1d74-47d2-9adb-ca094986f726":{"name":"bgrepeat.png_1","sourceUrl":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/e19d1edd-1d74-47d2-9adb-ca094986f726.png","frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":4,"version":"Jn3yhESlEZcIKMsl1LE6TBpgV_KKPBOI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/v3/animations/a1b2835d-b6a9-4acc-8c89-d8a145c370c9/e19d1edd-1d74-47d2-9adb-ca094986f726.png"},"95946563-3f3d-4ab1-a042-e944dd38ec08":{"name":"green","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"W93G256RVxEoGcxEggL2JO8bINx57z4B","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":600},"rootRelativePath":"assets/95946563-3f3d-4ab1-a042-e944dd38ec08.png"}}};
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
var bg = createSprite(200, 200);
bg.setAnimation("bgrepeat.png_1");
bg.velocityX = -5;
var bg2 = createSprite(800, 200);
bg2.setAnimation("bgrepeat.png_1");
bg2.velocityX = -5;
var mushroom = createSprite(450, 325);
mushroom.setAnimation("retrocreature_03_1");
mushroom.velocityX = -5;
mushroom.scale = 0.15;
var frog = createSprite(175, 308);
frog.setAnimation("mix-walk1.png_1");
frog.scale = 0.5;
var fly = createSprite(475, randomNumber(50, 350));
fly.setAnimation("ducky_1");
fly.velocityX = -7;
fly.scale = 0.2;

//create the variables
var score = 0;
var health = 100;
function draw() {
  background("black");

  if (bg.x < -400) {
    bg.x = 600;
  }
  if (bg2.x < -200) {
    bg2.x = 800;
  }
  // SPRITE INTERACTIONS
  // if the frog touches the mushroom
  // the health goes down, and the mushroom turns
  if (frog.isTouching(mushroom)) {
    mushroom.rotation = 30;
    frog.velocityX = 0;
    health = health - 1;
  } else {
    mushroom.rotation = 0;
  }
  // if the frog touches the fly
  // the score goes up, the fly resets
  if (frog.isTouching(fly)) {
    fly.x = randomNumber(420, 480);
    fly.y = randomNumber(50, 350);
    score = score + 1;
  }

  // JUMPING
  // if frog is on ground, 
  // jump if user presses up arrow, otherwise stop.
  if (frog.y >306) {
    if(keyWentDown("up")){
      frog.velocityY = -5;
      frog.setAnimation("mix-walk_jump.png_1");
    } else {
      frog.velocityY = 0;
      frog.setAnimation("mix-walk1.png_1");
    }
  }
  // if the frog reaches the top of the jump
  // go back down
  if (frog.y < 150) {
    frog.velocityY = 5;
  }

  // LOOPING
  // if the mushroom has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (mushroom.x < -30) {
    mushroom.x = 430;
  }
  // if the fly has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (fly.x < -30) {
    fly.x = randomNumber(420, 480);
    fly.y = randomNumber(50, 350);
  }

  // DRAW SPRITES
  drawSprites();
  // BACKGROUND
  fill(rgb(57, 255, 0));
  noStroke();
  rect(0, 360, 400, 40);
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill(rgb(0, 0, 0, 0.5));
  rect(266, 4, 125, 65);
  fill(rgb(57, 255, 0));
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score:", 280, 60);
  text(score, 350, 60);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    mushroom.velocityX = 0;
    fly.x = 600;
    background("black");
    fill(rgb(57, 255, 0));
    textSize(50);
    text("Game Over!" , 40, 200);
    textSize(30);
    text("Final Score:", 0, 30);
    text(score, 170, 30);
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
