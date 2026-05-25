

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["91f10853-18cd-4566-b11e-e0ec3a42b694","835b990e-3801-47b7-a12e-5c0979be890e","32670e18-1679-4c1d-b293-b7cb3871c22a","48631091-39e5-4298-a657-9558d9c9e650","e257a115-7908-49b2-9f19-024e9b426ed0","cb84e690-efb7-453c-a29c-ac7462700d72","484dfd1d-2a40-489b-84d3-d188511462de"],"propsByKey":{"91f10853-18cd-4566-b11e-e0ec3a42b694":{"name":"frog","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/91f10853-18cd-4566-b11e-e0ec3a42b694.png?version=RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","frameSize":{"x":104,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"RRKaOh.vyil2LwCZ9PFimdAdmbwLmbTX","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":70},"rootRelativePath":"assets/91f10853-18cd-4566-b11e-e0ec3a42b694.png"},"835b990e-3801-47b7-a12e-5c0979be890e":{"name":"mushroom","sourceUrl":"https://studio.code.org/v3/animations/bxS7XEWi1VaoTNG6cCQcDA/835b990e-3801-47b7-a12e-5c0979be890e.png?version=Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","frameSize":{"x":60,"y":63},"frameCount":1,"looping":true,"frameDelay":12,"version":"Di9TFsxRE2sotd3Kh0HrTFu4SUaJFwaN","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":63},"rootRelativePath":"assets/835b990e-3801-47b7-a12e-5c0979be890e.png"},"32670e18-1679-4c1d-b293-b7cb3871c22a":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg.","loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5_Mj297CD1ZOpafuDnOOtqCqIHeQVxg./category_animals/fly.png"},"48631091-39e5-4298-a657-9558d9c9e650":{"name":"happy","sourceUrl":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0RmqsWfCdwEeM9yHEyYWleWM8lEg3NkN/category_emoji/emoji_04.png"},"e257a115-7908-49b2-9f19-024e9b426ed0":{"name":"gameplaywacky_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png","frameSize":{"x":399,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QlASZ_b6ro5ayl24.MEPiWwjrdbFB3sB/category_germs/gameplaywacky_06.png"},"cb84e690-efb7-453c-a29c-ac7462700d72":{"name":"gameplay_bluestar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png","frameSize":{"x":398,"y":349},"frameCount":1,"looping":true,"frameDelay":2,"version":"sKktgxsqPeVkeft1BK_mk2Og5h1_D10R","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":349},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sKktgxsqPeVkeft1BK_mk2Og5h1_D10R/category_video_games/gameplay_bluestar.png"},"484dfd1d-2a40-489b-84d3-d188511462de":{"name":"sad","sourceUrl":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"64UquKf.BELLAWoDPxffw7NAEorufIff","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/64UquKf.BELLAWoDPxffw7NAEorufIff/category_emoji/emoji_01.png"}}};
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
var mushroom = createSprite(450, 325);
mushroom.setAnimation("gameplaywacky_06_1");
mushroom.velocityX = -5;
mushroom.scale = 0.20;
var frog = createSprite(175, 308);
frog.setAnimation("sad");
frog.scale = 0.25;
var fly = createSprite(475, randomNumber(50, 350));
fly.setAnimation("gameplay_bluestar_1");
fly.velocityX = -7;
fly.scale = 0.2;

//create the variables
var score = 0;
var health = 100;
function draw() {
  background("blue");

  // SPRITE INTERACTIONS
  // if the frog touches the mushroom
  // the health goes down, and the mushroom turns
  if (frog.isTouching(mushroom)) {
    mushroom.rotation = 30;
    frog.velocityX = 0;
    health = health - 1;
  } else {
    mushroom.rotation = 0;
  }
  // if the frog touches the fly
  // the score goes up, the fly resets
  if (frog.isTouching(fly)) {
    fly.x = randomNumber(420, 480);
    fly.y = randomNumber(50, 350);
    score = score + 1;
  }

  // JUMPING
  // if frog is on ground, 
  // jump if user presses up arrow, otherwise stop.
  if (frog.y >306) {
    if(keyWentDown("up")){
      frog.velocityY = -5;
      frog.setAnimation("happy");
    } else {
      frog.velocityY = 0;
      frog.setAnimation("sad");
    }
  }
  // if the frog reaches the top of the jump
  // go back down
  if (frog.y < 150) {
    frog.velocityY = 5;
  }

  // LOOPING
  // if the mushroom has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (mushroom.x < -30) {
    mushroom.x = 430;
  }
  // if the fly has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (fly.x < -30) {
    fly.x = randomNumber(420, 480);
    fly.y = randomNumber(50, 350);
  }

  // DRAW SPRITES
  drawSprites();
  // BACKGROUND
  fill(rgb(57, 255, 0));
  noStroke();
  rect(0, 360, 400, 40);
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill(rgb(0, 0, 0, 0.5));
  rect(266, 4, 125, 65);
  fill(rgb(57, 255, 0));
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score:", 280, 60);
  text(score, 350, 60);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill(rgb(57, 255, 0));
    textSize(50);
    text("Game Over!" , 40, 200);
    textSize(30);
    text("Final Score:", 0, 30);
    text(score, 170, 30);
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
