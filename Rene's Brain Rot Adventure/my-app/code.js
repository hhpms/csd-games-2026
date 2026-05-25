

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","25fb8614-570d-4755-a486-2f7692d9d008","08207821-51b7-43b3-9a1c-0a9b865ade87","e56a73e8-8251-4415-9cf1-746db085a959","3abcc16c-3151-4d71-8f83-8b9ad583bd0f","6c9c6d72-bc29-4528-95d0-39b1ffa975d3","29f1dfc8-2488-4d5c-bbd8-8f67b516c7a2"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"25fb8614-570d-4755-a486-2f7692d9d008":{"name":"67","sourceUrl":null,"frameSize":{"x":300,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nh0j6BT6jzVauXsgKHGgPfhYF2yDN2m0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":168},"rootRelativePath":"assets/25fb8614-570d-4755-a486-2f7692d9d008.png"},"08207821-51b7-43b3-9a1c-0a9b865ade87":{"name":"tuff snail","sourceUrl":null,"frameSize":{"x":194,"y":259},"frameCount":1,"looping":true,"frameDelay":12,"version":"R24ZFhTHJwPEAZFCf973.gHpo0y.ISVv","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":194,"y":259},"rootRelativePath":"assets/08207821-51b7-43b3-9a1c-0a9b865ade87.png"},"e56a73e8-8251-4415-9cf1-746db085a959":{"name":"anderdingus","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"HC5zT.WNfMtpw2M7btt__BIM4CrRQlYc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/e56a73e8-8251-4415-9cf1-746db085a959.png"},"3abcc16c-3151-4d71-8f83-8b9ad583bd0f":{"name":"Ryan B","sourceUrl":null,"frameSize":{"x":202,"y":250},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wxt0E.XKqBwrxQkOXZ0WqOfdhCORGeAa","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":202,"y":250},"rootRelativePath":"assets/3abcc16c-3151-4d71-8f83-8b9ad583bd0f.png"},"6c9c6d72-bc29-4528-95d0-39b1ffa975d3":{"name":"spongebob","sourceUrl":null,"frameSize":{"x":386,"y":386},"frameCount":1,"looping":true,"frameDelay":12,"version":"f.ApSNqFOkmzvXx2D3f5j9BLJ83jmGmj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":386},"rootRelativePath":"assets/6c9c6d72-bc29-4528-95d0-39b1ffa975d3.png"},"29f1dfc8-2488-4d5c-bbd8-8f67b516c7a2":{"name":"360_F_599720625_N2U8AQzhS5y7llrp2AMAQmKL4B6nWHKT.jpg_1","sourceUrl":"assets/v3/animations/980c5d88-e0d6-47df-8d1d-39a78a630966/29f1dfc8-2488-4d5c-bbd8-8f67b516c7a2.png","frameSize":{"x":639,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"gwBxE1w_8edm1Af3bPpARgIVCXBNA8lC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":639,"y":360},"rootRelativePath":"assets/v3/animations/980c5d88-e0d6-47df-8d1d-39a78a630966/29f1dfc8-2488-4d5c-bbd8-8f67b516c7a2.png"}}};
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
var health = createSprite(200, 200);
var GameBackground = createSprite(160, 65);
GameBackground.setAnimation("360_F_599720625_N2U8AQzhS5y7llrp2AMAQmKL4B6nWHKT.jpg_1");
var target = createSprite(375, 100);
target.setAnimation("67");
target.velocityX = 0;
var obstacle = createSprite(345, 325);
obstacle.setAnimation("anderdingus");
obstacle.velocityX = -1;
target.scale = 0.6;
obstacle.scale = 0.7;
GameBackground.scale = 2;
var snail = createSprite(70, 300);
snail.setAnimation("tuff snail");
snail.scale = 0.6;
// Create the sprites
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("white");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (snail.isTouching(obstacle)) {
    health = health - 1;
  }
  // the health goes down, and the obstacle turns
  if (snail.isTouching(target)) {
    score = score + 1;
    target.x = 450;
  }

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  if (snail.y > 305) {
    snail.velocityY = 0;
  }
  // if the player has reached the ground
  if (keyDown("up")) {
    snail.velocityY = -3;
  }
  // stop moving down
  if (snail.y < 150) {
    snail.velocityY = 3;
  }

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  obstacle.velocityX = -3;
  if (obstacle.x < -60) {
    obstacle.x = 330;
    obstacle.y = 330;
    obstacle.velocityX = -5;
  }
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  target.velocityX = -3;
  if (target.x < -60) {
    target.x = 350;
    target.y = 90;
    target.velocityX = -6;
  }
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("score", 30, 30);
  text(score, 90, 30);
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
