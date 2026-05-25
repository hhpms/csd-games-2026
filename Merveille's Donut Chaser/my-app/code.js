

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7f50a721-a0bd-4288-acc3-7db62b307629","0ca4b6d7-862f-439b-870c-440f15932475","abed63d9-3a5b-43c1-8735-aae0ea110813","c24ece2f-68c6-4a4f-862b-443d9b029c31"],"propsByKey":{"7f50a721-a0bd-4288-acc3-7db62b307629":{"name":"girl","sourceUrl":"assets/api/v1/animation-library/gamelab/riZlRnqafABQqOeVDR1T0qLs1eoXbsMX/category_people/kid_46.png","frameSize":{"x":192,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"riZlRnqafABQqOeVDR1T0qLs1eoXbsMX","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/riZlRnqafABQqOeVDR1T0qLs1eoXbsMX/category_people/kid_46.png"},"0ca4b6d7-862f-439b-870c-440f15932475":{"name":"virus","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"abed63d9-3a5b-43c1-8735-aae0ea110813":{"name":"donut_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png","frameSize":{"x":364,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png"},"c24ece2f-68c6-4a4f-862b-443d9b029c31":{"name":"background1","sourceUrl":"assets/api/v1/animation-library/gamelab/_irMxDOk72FVz_nAGmeKt.Hgjpk3Q9ck/category_backgrounds/background_landscape27.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_irMxDOk72FVz_nAGmeKt.Hgjpk3Q9ck","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_irMxDOk72FVz_nAGmeKt.Hgjpk3Q9ck/category_backgrounds/background_landscape27.png"}}};
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

var backround = createSprite(200, 200);
var girl1 = createSprite(200, 309);
var virus1 = createSprite(364, 108);
virus1.setAnimation("virus");
virus1.scale = 0.2;
var donut = createSprite(161, 38);
donut.setAnimation("donut_03_1");
donut.scale = 0.2;
// set velocity for the obstacle and the target
virus1.velocityX = -5;
donut.velocityX = 5;

//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  backround.setAnimation("background1");
  // draw the ground and other background
  girl1.setAnimation("girl");
  girl1.scale = 0.5;
  if (keyDown("up")) {
    girl1.velocityY = -5;
  }
  if (girl1.y < 50) {
    girl1.velocityY = 5;
  }
  if (girl1.y > 310) {
    girl1.velocityY = 0;
    girl1.y = 309;
  }
  if (virus1.x < -10) {
    virus1.x = 400;
  }
  if (donut.x > 400) {
    donut.x = -10;
  }


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (girl1.isTouching(virus1)) {
    health = health - 1;
  }
  if (girl1.isTouching(donut)) {
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


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  fill("black");
  textSize(20);
  text("Score:", 0, 15);
  text(score, 87, 18);
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
