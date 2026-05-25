

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d24dd1c-9177-4a33-844c-42999e634026","31b1d039-ef3f-4550-8db6-a4f42b539412","7e38db7a-1593-4091-8464-ba309dcbdb60","8a4dcec6-7733-44b5-9fdf-04b2f3aae066","8921b074-5b5d-46ea-86e4-b8c2cf9e8801"],"propsByKey":{"7d24dd1c-9177-4a33-844c-42999e634026":{"name":"rooster","sourceUrl":"assets/api/v1/animation-library/gamelab/c5vJC835DS2dCRVtEHPQ54eeNtxy1ls_/category_animals/cuteanimals_rooster_hello.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"c5vJC835DS2dCRVtEHPQ54eeNtxy1ls_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c5vJC835DS2dCRVtEHPQ54eeNtxy1ls_/category_animals/cuteanimals_rooster_hello.png"},"31b1d039-ef3f-4550-8db6-a4f42b539412":{"name":"rooster2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"7OS2E9ggCEmdMAAdUQhiF7kb1UqjUoHN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/31b1d039-ef3f-4550-8db6-a4f42b539412.png"},"7e38db7a-1593-4091-8464-ba309dcbdb60":{"name":"cherries_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NQIdJovfzJ.5MzylxtVh7_lXDFGE0Rsj/category_food/cherries.png","frameSize":{"x":344,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"NQIdJovfzJ.5MzylxtVh7_lXDFGE0Rsj","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":344,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NQIdJovfzJ.5MzylxtVh7_lXDFGE0Rsj/category_food/cherries.png"},"8a4dcec6-7733-44b5-9fdf-04b2f3aae066":{"name":"planefront_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png","frameSize":{"x":394,"y":154},"frameCount":1,"looping":true,"frameDelay":2,"version":"4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":154},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4SkN1lmmaZBvT.p1PJIpiK.0Bj0Xdyb1/category_vehicles/planefront_01.png"},"8921b074-5b5d-46ea-86e4-b8c2cf9e8801":{"name":"desert_road_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uexnVGl6IX_C6YzQENPPXtel_lCwoG7F/category_backgrounds/desert_road.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"uexnVGl6IX_C6YzQENPPXtel_lCwoG7F","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uexnVGl6IX_C6YzQENPPXtel_lCwoG7F/category_backgrounds/desert_road.png"}}};
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
var road = createSprite(200, 200);
road.setAnimation("desert_road_1");
// BACKGROUND
var plane = createSprite(200, 300);
var rooster = createSprite(20, 350);
var cherry = createSprite(360, 360);
cherry.setAnimation("cherries_1");
rooster.setAnimation("rooster");
plane.setAnimation("planefront_01_1");
rooster.scale = 0.2;
cherry.scale = 0.05;
plane.scale = 0.4;
// Create the sprites
plane.velocityY = 4;
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;

function draw() {
  drawSprites();
  // draw the ground and other background


  // SPRITE INTERACTIONS
  rooster.setCollider("circle");
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  if (rooster.isTouching(cherry)) {
    score = score + 10;
    cherry.x = randomNumber(0, 400);
  }
  // the score goes up, the target resets


  // JUMPING
  if (keyDown("right")) {
    rooster.velocityX = 4;
    rooster.setAnimation("rooster");
  }
  if (keyDown("left")) {
    rooster.velocityX = -4;
    rooster.setAnimation("rooster2");
  }
  // if the player has reached the ground
  if (rooster.x > 400) {
    rooster.velocityX = -3;
    rooster.setAnimation("rooster2");
  }
  if (0 > rooster.x) {
    rooster.velocityX = 3;
    rooster.setAnimation("rooster");
  }
  if (plane.y > 420) {
    plane.y = -20;
    plane.x = randomNumber(0, 400);
  }
  if (rooster.isTouching(plane)) {
    health = health - 5;
  }
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // if the obstacle has gone off the left hand side of the screen, 
  // LOOPING
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
