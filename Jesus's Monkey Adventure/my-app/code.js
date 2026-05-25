

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ca8e9602-525b-40cf-8979-135428ca044e","8b9d55fa-c90c-4e61-b91f-f9b2eaa493a1","2ab7d96f-6c5f-478b-b7e8-1c734bddf536"],"propsByKey":{"ca8e9602-525b-40cf-8979-135428ca044e":{"name":"cuteanimals_monkey2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png","frameSize":{"x":388,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png"},"8b9d55fa-c90c-4e61-b91f-f9b2eaa493a1":{"name":"virus03_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"2ab7d96f-6c5f-478b-b7e8-1c734bddf536":{"name":"banana_2","sourceUrl":"assets/api/v1/animation-library/gamelab/v7j1UxSDQJXQ.DSkQHEpCvi21di3hOmz/category_food/banana.png","frameSize":{"x":367,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"v7j1UxSDQJXQ.DSkQHEpCvi21di3hOmz","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":367,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v7j1UxSDQJXQ.DSkQHEpCvi21di3hOmz/category_food/banana.png"}}};
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
var monkey = createSprite(180, 260);
monkey.setAnimation("cuteanimals_monkey2_1");
monkey.setCollider("rectangle");
monkey.scale = 0.2;
var bannana = createSprite(300, 170);
bannana.setAnimation("banana_2");
bannana.setCollider("rectangle");
bannana.scale = 0.1;
var germmonster = createSprite(350, 280);
germmonster.setAnimation("virus03_04_1");
germmonster.setCollider("circle");
germmonster.scale = 0.15;
// set velocity for the obstacle and the target
bannana.velocityX = -3;
germmonster.velocityX = -3.5;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("lightblue");
  // draw the ground and other background
  fill("green");
  rect(0, 300, 400, 100);
  fill("yellow");
  ellipse(350, 50, 75, 75);


  // SPRITE INTERACTIONS
  if (monkey.isTouching(germmonster)) {
    health = health - 1;
  }
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  if (monkey.y > 259) {
    if (keyWentDown("up")) {
      monkey.velocityY = -4;
    } else {
      monkey.velocityY = 0;
    }
  }
  if ((monkey.y) <= 130) {
    monkey.velocityY = 4;
  }
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  if (bannana.x < 1) {
    bannana.x = 400;
  }
  if (germmonster.x < 3) {
    germmonster.x = 350;
  }
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  if (monkey.isTouching(bannana)) {
    score = score + 1;
  }
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Score:", 50, 30);
  text(score, 113, 31);
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
