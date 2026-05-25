

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","5f99c222-3be8-4fc7-aa37-765747c6f45a","e26bf73e-30e9-4ca3-8708-afcb4ff72739","f6390aa2-5101-44fb-85a3-a0ccaca764f7","53c87b7e-c189-4bfd-b7d4-cf3fd82ec993"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/91f10853-18cd-4566-b11e-e0ec3a42b694.png"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/835b990e-3801-47b7-a12e-5c0979be890e.png"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"5f99c222-3be8-4fc7-aa37-765747c6f45a":{"name":"alien_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q/category_fantasy/alien_15.png","frameSize":{"x":343,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":343,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rpGRRBbPHqXkhxRDkSnlEfGzNymHea6Q/category_fantasy/alien_15.png"},"e26bf73e-30e9-4ca3-8708-afcb4ff72739":{"name":"pupilportrait_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_/category_faces/pupilportrait_02.png","frameSize":{"x":282,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0axN3iBEMlHDrHZLJ1cpNnuGmlPSl11_/category_faces/pupilportrait_02.png"},"f6390aa2-5101-44fb-85a3-a0ccaca764f7":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"53c87b7e-c189-4bfd-b7d4-cf3fd82ec993":{"name":"mushroom_brown_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"4vq3dTaXOi59nK51ij3PHr_Nx04cxGOf","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/53c87b7e-c189-4bfd-b7d4-cf3fd82ec993.png"}}};
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
var player = createSprite(100, 260);
var target = createSprite(450, 250);
var obstacle = createSprite(400, 285);
target.velocityX = -3;
obstacle.velocityX = -3;
player.setAnimation("pupilportrait_02_1");
target.setAnimation("coin_gold_1");
obstacle.setAnimation("mushroom_brown_1");
player.scale = 0.3;
obstacle.scale = 0.3;

// set velocity for the obstacle and the target
//create the variables

var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("skyblue");
  if (keyDown("up") && player.y >= 260 ) {
    player.velocityY = -22;
    player.setCollider("rectangle");
  }
  player.velocityY = player.velocityY + 0.8;
  if (player.y > 260) {
   player.y = 260; 
   player.velocityY = 0
  }
  if (target.x < 0) {
    target.x = 400
    
  }
  if (obstacle.x < 0) {
    obstacle.x = 400
    
  }
  if (player.isTouching(obstacle)) {
    health = health - 1
  }
  if (player.isTouching(target)) {
    score = score + 1
    target.x = 400
  }
  text("Health"+ health, 20, 30);
  text("Score" + score, 20, 60);
  fill("yellow");
  ellipse(350, 50, 60, 60);
  
  fill("white");
  ellipse(100, 100, 80, 50);
  
  fill("green");
  rect(0, 300, 400, 100);
  // draw the ground and other background
  // SPRITE INTERACTIONS
  
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  
  // if the player touches the target
  // the score goes up, the target resets

  // JUMPING
  // if the player has reached the ground
  
  // stop moving down
  // if the player presses the up arrow
  
  // start moving up
  // LOOPING

  // if the player reaches the top of the jump
  // start moving down

  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  text("dodge the mushroom", 200, 150);
  textSize(90);

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
