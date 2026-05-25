

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d638d183-569b-41b9-a3a4-57aa0bb2328c","bba5fb55-a07c-4f07-9ce2-97855b167ae6","3a34788a-9450-4003-97b4-54634047bedb","22f0ec77-d71c-4fab-94f5-e5aa005ada09","b53d57ad-1e0c-44ee-a5b7-dc8507ccb2c4"],"propsByKey":{"d638d183-569b-41b9-a3a4-57aa0bb2328c":{"name":"monkeyr","sourceUrl":"assets/api/v1/animation-library/gamelab/46.yxGXGnH4rNY7gTs.ixaTeC_K1zmmv/category_animals/cuteanimals_monkey_hello.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"46.yxGXGnH4rNY7gTs.ixaTeC_K1zmmv","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/46.yxGXGnH4rNY7gTs.ixaTeC_K1zmmv/category_animals/cuteanimals_monkey_hello.png"},"bba5fb55-a07c-4f07-9ce2-97855b167ae6":{"name":"monkeyL","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"IxdVyFRcjHaRXvEhLANaf7egIMmLwySM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/bba5fb55-a07c-4f07-9ce2-97855b167ae6.png"},"3a34788a-9450-4003-97b4-54634047bedb":{"name":"banana","sourceUrl":"assets/api/v1/animation-library/gamelab/pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W/category_food/face_banana.png","frameSize":{"x":264,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pWFbbj15zL1DL.xT.w9LmvN_ZdtcMo_W/category_food/face_banana.png"},"22f0ec77-d71c-4fab-94f5-e5aa005ada09":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/l2HYVselH.2q4KS7.yoaSIHOHM7.BYtT/category_backgrounds/tree_island.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"l2HYVselH.2q4KS7.yoaSIHOHM7.BYtT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/l2HYVselH.2q4KS7.yoaSIHOHM7.BYtT/category_backgrounds/tree_island.png"},"b53d57ad-1e0c-44ee-a5b7-dc8507ccb2c4":{"name":"jaguar","sourceUrl":"assets/api/v1/animation-library/gamelab/PMYQVWXNnreJoYixlnQIm3M.L5YulyLw/category_animals/cuteanimals_jaguar.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PMYQVWXNnreJoYixlnQIm3M.L5YulyLw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PMYQVWXNnreJoYixlnQIm3M.L5YulyLw/category_animals/cuteanimals_jaguar.png"}}};
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
var bg = createSprite(200, 200);
bg.setAnimation("background");
var monkeyr = createSprite(43, 319);
monkeyr.setAnimation("monkeyr");
monkeyr.scale = 0.3;
var jaguar = createSprite(300, 300);
jaguar.setAnimation("jaguar");
jaguar.scale = 0.3;
var banana = createSprite(250, 319);
banana.setAnimation("banana");
banana.scale = 0.1;
jaguar.velocityY = 4;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  if (keyDown("left")) {
    monkeyr.velocityX = -4;
    monkeyr.setAnimation("monkeyL");
  }
  if (keyDown("right")) {
    monkeyr.velocityX = 4;
    monkeyr.setAnimation("monkeyr");
  }
  if (monkeyr.x > 400) {
    monkeyr.setAnimation("monkeyL");
    monkeyr.velocityX = -4;
  }
  // if the player has reached the ground
  // stop moving down
  if (jaguar.y > 430) {
    jaguar.y = -20;
    jaguar.x = randomNumber(0, 400);
  }
  if (monkeyr.isTouching(jaguar)) {
    health = health - 5;
  }

  // if the player presses the up arrow
  if (monkeyr.isTouching(banana)) {
    score = score + 10;
    banana.x = randomNumber(0, 400);
  }
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
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("score", 180, 30);
  text(score, 230, 30);
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
