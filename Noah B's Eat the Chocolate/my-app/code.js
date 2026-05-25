

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","391d9871-1d1a-44c7-96e1-403562f7d328","cfdb03c4-4169-43ca-8ead-ffddb50eb37b","f1e4f091-2cf8-4e0f-91d3-58794ebb58dc","a903cf2f-dc85-40ee-a274-5e0939b1c2b0"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/91f10853-18cd-4566-b11e-e0ec3a42b694.png"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/835b990e-3801-47b7-a12e-5c0979be890e.png"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"391d9871-1d1a-44c7-96e1-403562f7d328":{"name":"gameplayfaces_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png"},"cfdb03c4-4169-43ca-8ead-ffddb50eb37b":{"name":"broccoli_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png","frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png"},"f1e4f091-2cf8-4e0f-91d3-58794ebb58dc":{"name":"chocobar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY/category_food/chocobar.png","frameSize":{"x":395,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Xf4zweHYr9cYZJAcvc9iat2aYndzLtTY/category_food/chocobar.png"},"a903cf2f-dc85-40ee-a274-5e0939b1c2b0":{"name":"face_broc_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ub5g3lhCqabDt4tlhLOEG85lxxCTsCt1/category_food/face_broc.png","frameSize":{"x":340,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"ub5g3lhCqabDt4tlhLOEG85lxxCTsCt1","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ub5g3lhCqabDt4tlhLOEG85lxxCTsCt1/category_food/face_broc.png"}}};
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
background("blue");
// Create the sprites
var creacher = createSprite(150, 306);
creacher.setAnimation("gameplayfaces_08_1");
creacher.scale = 0.1;
var candy = createSprite(200, 150);
candy.setAnimation("chocobar_1");
candy.scale = 0.1;
var brock = createSprite(145, 208);
brock.setAnimation("face_broc_1");
brock.scale = 0.2;
var bro = createSprite(195, 166);
bro.setAnimation("face_broc_1");
bro.scale = 0.2;
// set velocity for the obstacle and the target

brock.velocityX = -4;
bro.velocityX = -4;
candy.velocityX = -4;

//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("blue");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (creacher.isTouching(brock)) {
    health = health - 3;
  }
  if (creacher.isTouching(candy)) {
    score = score + 2;
  }
  if (creacher.isTouching(bro)) {
    health = health - 2;
  }
  if (creacher.isTouching(candy)) {
    health = health + 2;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (creacher.y > 305) {
    if (keyWentDown("up")) {
      creacher.velocityY = -5;
    } else {
      creacher.velocityY = 0;
    }
  }
  if (creacher.y < 67) {
    creacher.velocityY = 5;
  }

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  if (brock.x < 4) {
    brock.x = 400;
    brock.y = randomNumber(185, 59);
  }
  if (bro.x < 4) {
    bro.x = 400;
    bro.y = randomNumber(374, 186);
  }
  if (candy.x < 4) {
    candy.x = 500;
    candy.y = randomNumber(124, 121);
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
  text("Score:", 45, 31);
  text(score, 109, 32);
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
