

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e88fa42b-f327-46e8-90ef-1cf083ceff5e","b9ab066e-356a-4a13-8562-0f3cb609598d","31dc5e03-a5eb-4994-af47-43be25781c40","49a54413-354d-41bd-9f7f-24dfaf55afc7","715f2412-e45c-4828-851b-e32d9055ae4b","877810fa-e8fd-4038-9e40-045851ad952a"],"propsByKey":{"e88fa42b-f327-46e8-90ef-1cf083ceff5e":{"name":"alienBlue_walk_1","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":3,"looping":true,"frameDelay":12,"version":"t_RDOCM4qfn6ZC_fV2ZNoV5ZrtHi9UTp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":196},"rootRelativePath":"assets/e88fa42b-f327-46e8-90ef-1cf083ceff5e.png"},"b9ab066e-356a-4a13-8562-0f3cb609598d":{"name":"alienBlue_jump_1","sourceUrl":null,"frameSize":{"x":66,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uah1.Bohd78LemqICQ8dFS5LUT2hBOL6","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":93},"rootRelativePath":"assets/b9ab066e-356a-4a13-8562-0f3cb609598d.png"},"31dc5e03-a5eb-4994-af47-43be25781c40":{"name":"retro_powerup_coin_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"},"49a54413-354d-41bd-9f7f-24dfaf55afc7":{"name":"retrocreature_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png","frameSize":{"x":299,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":299,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AJFOO2mOf.6fzqG9AwpOSuXKq65MpLsr/category_retro/retrocreature_13.png"},"715f2412-e45c-4828-851b-e32d9055ae4b":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"877810fa-e8fd-4038-9e40-045851ad952a":{"name":"sticker_23_2","sourceUrl":null,"frameSize":{"x":258,"y":256},"frameCount":1,"looping":true,"frameDelay":12,"version":"xEHxzPH92.SBcpJrCB2VxupRW.lBOOwQ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":256},"rootRelativePath":"assets/877810fa-e8fd-4038-9e40-045851ad952a.png"}}};
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
var space = createSprite(200, 200);
var enemy = createSprite(400, 390);
var coin = createSprite(300, 200);
var comet = createSprite(400, 150);
var alien = createSprite(200, 350);
space.setAnimation("bg_landscape21_1");
alien.setAnimation("alienBlue_walk_1");
comet.setAnimation("sticker_23_2");
coin.setAnimation("retro_powerup_coin_1");
enemy.setAnimation("retrocreature_13_1");
enemy.scale = 0.1;
coin.scale = 0.1;
comet.scale = 0.4;
// set velocity for the obstacle and the target
coin.velocityX = -3;
enemy.velocityX = -3;
comet.velocityX = -3;

enemy.setCollider("circle");
alien.setCollider("circle");
comet.setCollider("circle");
coin.setCollider("circle");

//create the variables
var score = 1;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background
  background("white");
  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  if (alien.isTouching(enemy)) {
    health = health - 0.3;
  }
  // the health goes down, and the obstacle turns
  if (alien.isTouching(comet)) {
    health = health - 0.5;
  }

  // if the player touches the target
  // the score goes up, the target resets
  if (alien.isTouching(coin)) {
    score = score + 3;
  }


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (alien.y > 350) {
    alien.velocityY = 0;
  }

  // if the player presses the up arrow
  // start moving up
  if (keyWentDown("space")) {
    alien.velocityY = -3;
  }

  // if the player reaches the top of the jump
  // start moving down
  if (alien.y < 200) {
    alien.velocityY = 5;
  }


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  if (comet.x < 0) {
    comet.x = 400;
    comet.velocityX = randomNumber(-1, -11);
  }
  // move it to the right hand side of the screen
  if (enemy.x < 0) {
    enemy.x = 400;
    enemy.velocityX = randomNumber(-1, -11);
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if (coin.x < 0) {
    coin.y = randomNumber(220, 325);
    coin.x = 400;
  }

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("white");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("Score: ", 280, 60);
  text(score, 340, 60);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
  }
  // 
  if (score > 700) {
    background("black");
    fill("green");
    textSize(50);
    text("You Win!!!!", 40, 200);
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
