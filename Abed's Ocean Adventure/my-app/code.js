

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["71807004-69ec-41d6-a595-1b328562e1c3","0cae9335-1303-4358-8b55-7f17c7236d1c","5bf3984e-c2e0-46fd-bdbc-19f5e8dbf50f"],"propsByKey":{"71807004-69ec-41d6-a595-1b328562e1c3":{"name":"coral","sourceUrl":"assets/api/v1/animation-library/gamelab/Ako4rnHwyQUnx0Suv_ZbTK1lyPww1sNi/category_aquatic_objects/underseadeco_25.png","frameSize":{"x":316,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ako4rnHwyQUnx0Suv_ZbTK1lyPww1sNi","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ako4rnHwyQUnx0Suv_ZbTK1lyPww1sNi/category_aquatic_objects/underseadeco_25.png"},"0cae9335-1303-4358-8b55-7f17c7236d1c":{"name":"fish","sourceUrl":"assets/api/v1/animation-library/gamelab/RM7yPw5pJscI7t43CQVawj4yzr7_tKC1/category_animals/cuteanimals_tuna.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"RM7yPw5pJscI7t43CQVawj4yzr7_tKC1","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RM7yPw5pJscI7t43CQVawj4yzr7_tKC1/category_animals/cuteanimals_tuna.png"},"5bf3984e-c2e0-46fd-bdbc-19f5e8dbf50f":{"name":"germ","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"}}};
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
var fish = createSprite(4, 185);
var coral = createSprite(305, 125);
var germ = createSprite(195, 347);
fish.setAnimation("fish");
germ.setAnimation("germ");
coral.setAnimation("coral");
fish.scale = 0.2;
germ.scale = 0.2;
coral.scale = 0.2;
// set velocity for the obstacle and the target
fish.velocityX = 3;
germ.velocityX = -3;
coral.velocityX = -3;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("lightblue");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  if (fish.isTouching(coral)) {
    score = score + 1;
  }
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (fish.isTouching(germ)) {
    health = health - 1;
  }

  // if the player touches the target
  // the score goes up, the target resets
  if (fish.y < 5) {
    fish.y = 5;
  }
  if (fish.y > 398) {
    fish.y = 398;
  }


  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  if (keyDown("up")) {
    fish.velocityY = -2;
  }
  if (keyDown("down")) {
    fish.velocityY = 2;
  }
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  if (coral.x < -10) {
    coral.x = 500;
  }
  if (fish.x < 500) {
    fish.x = 20;
  }
  if (germ.x < -10) {
    germ.x = 500;
  }
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
  text("Score:", 0, 15);
  text (score, 60, 15);
  textSize(30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("red");
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
