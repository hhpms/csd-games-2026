

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","7f48f4a6-b79d-44f7-b21c-853231a6ad27","c0e78201-3f50-4222-b1b7-cc099802b5a1","f9b670ff-6e3e-4569-82e5-93068a5a2d02","112e23fe-3689-43f2-9b7f-f5b497654a60","4d1d69b7-b856-4fa7-bd6d-2c9555ac15a1","f48bb4c4-1443-45b0-a31a-4699b4522955"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":null,"frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"OEi.gsiooGAErjsFJKevTdDgLAjz6bbU","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/835b990e-3801-47b7-a12e-5c0979be890e.png"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"7f48f4a6-b79d-44f7-b21c-853231a6ad27":{"name":"bunny1_1","sourceUrl":null,"frameSize":{"x":122,"y":209},"frameCount":2,"looping":true,"frameDelay":12,"version":"zWVFG71KQDjf4Md9mwbti5OaFMfjh3v5","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":209},"rootRelativePath":"assets/7f48f4a6-b79d-44f7-b21c-853231a6ad27.png"},"c0e78201-3f50-4222-b1b7-cc099802b5a1":{"name":"carrot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"kkeHewSq4Bbcng5xHNJjaswOHWllYItp","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kkeHewSq4Bbcng5xHNJjaswOHWllYItp/category_food/carrot.png"},"f9b670ff-6e3e-4569-82e5-93068a5a2d02":{"name":"tumbleweed_1","sourceUrl":null,"frameSize":{"x":308,"y":314},"frameCount":1,"looping":true,"frameDelay":12,"version":"saTImHJm9.Q417ISCLlAjmg..MY9PRad","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":314},"rootRelativePath":"assets/f9b670ff-6e3e-4569-82e5-93068a5a2d02.png"},"112e23fe-3689-43f2-9b7f-f5b497654a60":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"4d1d69b7-b856-4fa7-bd6d-2c9555ac15a1":{"name":"camel_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kZQj9T1smV0oogX5CK15Y4P5cNPAyqX8/category_animals/camel.png","frameSize":{"x":395,"y":340},"frameCount":1,"looping":true,"frameDelay":2,"version":"kZQj9T1smV0oogX5CK15Y4P5cNPAyqX8","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":340},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kZQj9T1smV0oogX5CK15Y4P5cNPAyqX8/category_animals/camel.png"},"f48bb4c4-1443-45b0-a31a-4699b4522955":{"name":"cooldrink_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_VeXcsXQjj1uLjZuunRdtGB9TWROHykF/category_food/cooldrink.png","frameSize":{"x":345,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"_VeXcsXQjj1uLjZuunRdtGB9TWROHykF","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":345,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_VeXcsXQjj1uLjZuunRdtGB9TWROHykF/category_food/cooldrink.png"}}};
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


//create the variables
var score = 0;
var health = 100;
var camel = createSprite(100, 230);
camel.setAnimation("camel_1");
camel.scale = 0.4;
var water = createSprite(500, 100);
water.setAnimation("cooldrink_1");
water.scale = 0.1;
var tumbleweed = createSprite(350, 265);
tumbleweed.setAnimation("tumbleweed_1");
tumbleweed.scale = 0.2;
tumbleweed.velocityX = -5;
water.velocityX = -5;

function draw() {
  // BACKGROUND
  background("lightyellow");
  // draw the ground and other background
  fill("yellow");
  ellipse(50, 50, 100, 100);
  fill("#aa6f33");
  rect(0, 300, 400, 300);


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (camel.y > 229) {
    if (keyWentDown("up")) {
      camel.velocityY = -5;
    } else {
      camel.velocityY = 0;
    }
  }
  if (camel.y < 100) {
    camel.velocityY = 5;
  }

  // if the player touches the target
  // the score goes up, the target resets

  if (camel.isTouching(tumbleweed)) {
    health = health - 1;
  }
  if (camel.isTouching(water)) {
    score = score + 1;
    water.visible = false;
    water.x = 450;
  }
  water.visible = true;

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
  if (tumbleweed.x < 1) {
    tumbleweed.x = 400;
  }
  if (water.x < 1) {
    water.x = 400;
  }

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
  textSize(20);
  text("Score:", 280, 60);
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
