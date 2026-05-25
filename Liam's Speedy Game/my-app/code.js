

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","623bda35-a216-4d4e-a685-392f5535b473","600eafde-1d20-4600-9985-fb0bac1ac881","4f9fcf74-556c-4a85-b177-911fa393f0ab","506c42be-898b-4f13-b7c9-8d5324e37f6c","589b07bd-1b33-4a90-9d68-c56ae330e9c1","1b25f154-4fff-4d63-a49d-053b739e8e58"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"623bda35-a216-4d4e-a685-392f5535b473":{"name":"awman","sourceUrl":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/623bda35-a216-4d4e-a685-392f5535b473.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"j0ScZY3X.y8W_LeFvkvp.QRmS3ldwXek","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/623bda35-a216-4d4e-a685-392f5535b473.png"},"600eafde-1d20-4600-9985-fb0bac1ac881":{"name":"what da freak boi.jpg_1","sourceUrl":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/600eafde-1d20-4600-9985-fb0bac1ac881.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"AiKJEsjVVGHws_bvBQnA.qCwnwCbRwvi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/600eafde-1d20-4600-9985-fb0bac1ac881.png"},"4f9fcf74-556c-4a85-b177-911fa393f0ab":{"name":"Cool.jpg_1","sourceUrl":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/4f9fcf74-556c-4a85-b177-911fa393f0ab.png","frameSize":{"x":303,"y":166},"frameCount":1,"looping":true,"frameDelay":4,"version":"SGD_vMrFt8wS81J2ybmpxnfVIJ2Z1hpY","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":303,"y":166},"rootRelativePath":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/4f9fcf74-556c-4a85-b177-911fa393f0ab.png"},"506c42be-898b-4f13-b7c9-8d5324e37f6c":{"name":"i so happy.jpg_1","sourceUrl":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/506c42be-898b-4f13-b7c9-8d5324e37f6c.png","frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":4,"version":"eNfWnUktN62IvklPL.ndk9lFX9c.MWFc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/506c42be-898b-4f13-b7c9-8d5324e37f6c.png"},"589b07bd-1b33-4a90-9d68-c56ae330e9c1":{"name":"aBackground","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".ARQkL4S0QHxDbvSAaOAcTAOsJe0pY2q","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/589b07bd-1b33-4a90-9d68-c56ae330e9c1.png"},"1b25f154-4fff-4d63-a49d-053b739e8e58":{"name":"angy.jpg_1","sourceUrl":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/1b25f154-4fff-4d63-a49d-053b739e8e58.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"NAZ5fTz.ikVcM5yjRwZfwti4s4Dwwnfv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/91b88e78-5942-48a7-8cec-5f9ef33c7b9f/1b25f154-4fff-4d63-a49d-053b739e8e58.png"}}};
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
var player = createSprite(200, 350);
player.setAnimation("Cool.jpg_1");
player.scale = 0.25;
var target = createSprite(550, 80);
target.setAnimation("i so happy.jpg_1");
target.scale = 0.25;
var obstacle = createSprite(600, 200);
obstacle.setAnimation("angy.jpg_1");
obstacle.scale = 0.2;
// set velocity for the obstacle and the target
obstacle.velocityX = -8;
target.velocityX = -10;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background
  background(rgb(0, 75, 150));


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (player.isTouching(obstacle)) {
    health = health-5;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets
  if (player.isTouching(target)) {
    score = score+1;
  }


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (player.y > 375) {
    player.velocityY = 0;
  }

  // if the player presses the up arrow
  // start moving up
  if (keyDown("up")) {
    player.velocityY = -10;
  }

  // if the player reaches the top of the jump
  // start moving down
  if (player.y < 10) {
    player.velocityY = 10;
  }


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (obstacle.x < 0) {
    obstacle.x = 500;
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (target.x < 0) {
    target.x = 500;
  }

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("score:", 280, 60);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text(score, 350, 60);
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
