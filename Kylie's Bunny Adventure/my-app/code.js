

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ae88ad2d-c16b-426c-8d5e-ed517b68e2f6","51fbe1e2-1a97-4645-8348-14ac0cabdc8e","99055457-a20a-4971-9de7-6a30bec90202","4322660c-bb5d-49ea-bd4d-c2d12fa3dc66","aaeacc8f-9344-4ec4-9456-ce2741ccf649","eb1cb4fc-7d8d-436c-8c88-d5a40b391f07","c0af85b7-d3b6-4c22-882f-c7a91f758ae0"],"propsByKey":{"ae88ad2d-c16b-426c-8d5e-ed517b68e2f6":{"name":"bunny2_walk1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GiMJgCa0TR7y853dwDz8HLaIY8zhz0Uq/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"GiMJgCa0TR7y853dwDz8HLaIY8zhz0Uq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GiMJgCa0TR7y853dwDz8HLaIY8zhz0Uq/category_animals/bunny2_walk1.png"},"51fbe1e2-1a97-4645-8348-14ac0cabdc8e":{"name":"angry","sourceUrl":"assets/api/v1/animation-library/gamelab/kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR/category_video_games/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kFop4pk9J7NCJ3PSYnb4OUSlgcVocboR/category_video_games/sun.png"},"99055457-a20a-4971-9de7-6a30bec90202":{"name":"happy","sourceUrl":"assets/api/v1/animation-library/gamelab/jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe/category_video_games/sun_happy.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jUZ7f4J2epX4bHKIb0dIGPT1hYAFlNYe/category_video_games/sun_happy.png"},"4322660c-bb5d-49ea-bd4d-c2d12fa3dc66":{"name":"carrot","sourceUrl":"assets/api/v1/animation-library/gamelab/BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ/category_food/carrot_1.png","frameSize":{"x":389,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BJiujt1JCKr8EcsbZ.IDJM.CxfYn9HOJ/category_food/carrot_1.png"},"aaeacc8f-9344-4ec4-9456-ce2741ccf649":{"name":"dingo","sourceUrl":"assets/api/v1/animation-library/gamelab/xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM/category_animals/dingo.png","frameSize":{"x":306,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xISWm91StiQQ4m_8EgGr4O4cUpTGfOBM/category_animals/dingo.png"},"eb1cb4fc-7d8d-436c-8c88-d5a40b391f07":{"name":"gp","sourceUrl":null,"frameSize":{"x":216,"y":233},"frameCount":1,"looping":true,"frameDelay":12,"version":"ThRFswKb6i_6LQXnWqPhLMNVLNCocKv5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":233},"rootRelativePath":"assets/eb1cb4fc-7d8d-436c-8c88-d5a40b391f07.png"},"c0af85b7-d3b6-4c22-882f-c7a91f758ae0":{"name":"bunny2","sourceUrl":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png"}}};
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
var sprite1 = createSprite(50, 309);
sprite1.setAnimation("bunny2_walk1_1");
sprite1.scale = 0.5;
var sprite2 = createSprite(50, 50);
sprite2.setAnimation("angry");
sprite2.scale = 0.7;
var sprite5 = createSprite(200, 333);
sprite5.setAnimation("gp");
sprite5.scale = 0.5;
var sprite3 = createSprite(randomNumber(350, 400), 200);
sprite3.setAnimation("carrot");
sprite3.scale = 0.1;
sprite3.velocityX = 3;
var sprite4 = createSprite(415, 330);
sprite4.setAnimation("dingo");
sprite4.scale = 0.1;
sprite4.velocityX = 3;
// Create the sprites
// set velocity for the obstacle and the target


//create the variables
var score = 1;
score = score + 1;
var health = 100;

function draw() {
  // BACKGROUND
  background("pink");
  // draw the ground and other background

  stroke("white");
  fill("white");
  ellipse(0, 50, 200, 50);
  ellipse(400, 100, 200, 50);
  ellipse(200, 70, 150, 50);
  ellipse(175, 0, 200, 50);
  ellipse(150, 145, 200, 50);
  stroke("green");
  fill("green");
  rect(0, 350, 400, 200);
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (sprite1.isTouching(sprite4)) {
    health = health - 4;
  }
  if (sprite1.isTouching(sprite3)) {
    score = score + 1;
  }
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  if (sprite1.y > 305) {
    if (keyWentDown("up")) {
      sprite1.velocityY = -5;
    } else {
      sprite1.velocityY = 0;
    }
  }
  if (sprite1.y < 150) {
    sprite1.velocityY = 5;
  }
  // stop moving down

  // if the player presses the up arrow
  if (sprite1.isTouching(sprite3)) {
    sprite3.visible = 0;
  }
  if (sprite3.x == -15) {
    sprite3.visible = 4;
  }
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  if (sprite3.x > 400) {
    sprite3.velocityX = -5;
  }
  if (sprite3.x < -15) {
    sprite3.x = 400;
  }
  if (sprite4.x > 400) {
    sprite4.velocityX = -5;
  }
  if (sprite4.x < -15) {
    sprite4.x = 400;
  }
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  stroke("black");
  fill("black");
  textSize(20);
  text("Score:", 150, 30);
  text(score, 220, 30);
  text("Health:", 280, 30);
  text (health, 350, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("white");
    fill("pink");
    textSize(50);
    text("Game Over!" , 55, 200);
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
