

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["853b0c27-5621-4e9a-abf4-0f63f36ded0e","46a48284-89e7-497a-9c7e-5f4e2f585098","2022605b-4798-4c83-90d3-61d8fc553cfa","7081bead-f45b-491c-ac07-dd101373c909"],"propsByKey":{"853b0c27-5621-4e9a-abf4-0f63f36ded0e":{"name":"pep","sourceUrl":null,"frameSize":{"x":41,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"Apw.l5gFYuX0uWNKGmYDOcTWlhT9xwj9","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":62},"rootRelativePath":"assets/853b0c27-5621-4e9a-abf4-0f63f36ded0e.png"},"46a48284-89e7-497a-9c7e-5f4e2f585098":{"name":"snowflake","sourceUrl":null,"frameSize":{"x":41,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"wfka4oBXwSAY0zHspirOmhKjoliORN5U","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":41},"rootRelativePath":"assets/46a48284-89e7-497a-9c7e-5f4e2f585098.png"},"2022605b-4798-4c83-90d3-61d8fc553cfa":{"name":"pep_hurt","sourceUrl":null,"frameSize":{"x":41,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"8S2NznVr3BqYW.7jaftqy8Uu.bnFhWa4","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":62},"rootRelativePath":"assets/2022605b-4798-4c83-90d3-61d8fc553cfa.png"},"7081bead-f45b-491c-ac07-dd101373c909":{"name":"ROOK","sourceUrl":null,"frameSize":{"x":76,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"VHLy8bSci_xL8pFgn1gGkhTtzSnaCyc1","loadedFromSource":true,"saved":true,"sourceSize":{"x":76,"y":40},"rootRelativePath":"assets/7081bead-f45b-491c-ac07-dd101373c909.png"}}};
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
var pep = createSprite(200, 310);
pep.setAnimation("pep");
var snowflake = createSprite(200, 0);
snowflake.setAnimation("snowflake");
var rock = createSprite(300, 0);
rock.setAnimation("ROOK");
// set velocity for the obstacle and the target
pep.scale = 3;
snowflake.velocityY = 2;
rock.velocityY = 3;


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  background("lightblue");
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if pep touches the obstacle
  if (pep.isTouching(rock)) {
    health = health - 1;
  }

  // if pep touches the target
  if (pep.isTouching(snowflake)) {
    score = score + 1;
  }
  // the score goes up, the target resets


  //MOVING(SLIDING)
  // if player presses left
  //pep slides left
  if (keyDown("left")) {
    pep.velocityX = -4;
  }
  //if player presses right
  //pep slides right
  if (keyDown("right")) {
    pep.velocityX = 4;
  }

  // LOOPING
  // if the obstacle has gone off the bottom of the screen, 
  if (snowflake.y > 400) {
    snowflake.y = 0;
  }
  if (rock.y > 400) {
    rock.y = 0;
  }
  // move it to the top of the screen

  // if the target has gone of the screen,
  // move it

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Score:", 0, 15);
  text("Health:", 280, 16);
  text(health, 350, 17);
  text(score, 60, 17);
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
