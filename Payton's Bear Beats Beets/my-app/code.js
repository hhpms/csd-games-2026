

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["14a8dc69-c9cc-4cd3-831a-5279cb3b014b","6304325c-b070-4ef7-9b9b-0d2b36897167","86e71e61-4ecb-49dd-9a3a-019f6a417eb0","ab4099ad-3924-4e76-a7fd-fa43791daa18"],"propsByKey":{"14a8dc69-c9cc-4cd3-831a-5279cb3b014b":{"name":"greentree_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Fxy.8fivx8bjKXCTxksJN99OAO3xjtwV/category_video_games/greentree_08.png","frameSize":{"x":303,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Fxy.8fivx8bjKXCTxksJN99OAO3xjtwV","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":303,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Fxy.8fivx8bjKXCTxksJN99OAO3xjtwV/category_video_games/greentree_08.png"},"6304325c-b070-4ef7-9b9b-0d2b36897167":{"name":"brownbear_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Puu6.MIPh3WzJZlUT8yM1hP1IdVbEJT_/category_animals/brownbear.png","frameSize":{"x":398,"y":270},"frameCount":1,"looping":true,"frameDelay":2,"version":"Puu6.MIPh3WzJZlUT8yM1hP1IdVbEJT_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":270},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Puu6.MIPh3WzJZlUT8yM1hP1IdVbEJT_/category_animals/brownbear.png"},"86e71e61-4ecb-49dd-9a3a-019f6a417eb0":{"name":"face_fish_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BNFsodOdLHJr7ulFOjo7uDUxEKF_KZeO/category_food/face_fish.png","frameSize":{"x":394,"y":223},"frameCount":1,"looping":true,"frameDelay":2,"version":"BNFsodOdLHJr7ulFOjo7uDUxEKF_KZeO","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":223},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BNFsodOdLHJr7ulFOjo7uDUxEKF_KZeO/category_food/face_fish.png"},"ab4099ad-3924-4e76-a7fd-fa43791daa18":{"name":"beet_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz/category_food/beet.png","frameSize":{"x":491,"y":705},"frameCount":1,"looping":true,"frameDelay":2,"version":"Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":491,"y":705},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Rno5kOCpwdeBBGyLjI9Vvz956l7_hVZz/category_food/beet.png"}}};
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
var bear = createSprite(150, 200);
bear.setAnimation("brownbear_1");
bear.scale = 0.4;
var fish = createSprite(400, 150);
fish.setAnimation("face_fish_1");
fish.scale = 0.2;
var beet = createSprite(400, 275);
beet.setAnimation("beet_1");
beet.scale = 0.1;
fish.velocityX = -4;
beet.velocityX = -4;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background

  background("lightblue");
  fill("darkgreen");
  rect(0, 250, 400, 150);

  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (bear.isTouching(beet)) {
    health = health - 1;
    beet.rotation = -10;
  }

  // if the player touches the target
  // the score goes up, the target resets
  if (bear.isTouching(fish)) {
    score = score + 1;
    fish.y = randomNumber(80, 200);
    fish.x = 430;
  }


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (bear.y > 200) {
    bear.velocityY = 0;
  }

  // if the player presses the up arrow
  // start moving up
  if (keyDown("up")) {
    bear.velocityY = -4;
  }

  // if the player reaches the top of the jump
  // start moving down
  if (bear.y < 70) {
    bear.velocityY = 4;
  }


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (fish.x < 0) {
    fish.x = randomNumber(400, 415);
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (beet.x < 0) {
    beet.x = 435;
  }

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
  text("Score:", 280, 50);
  text(score, 350, 50);
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
