

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a5cb494-84f7-4a19-aa38-eff9f107d6c1","c3d81dd8-5bb1-46d8-bcc9-b8900597848e","12d303ea-efd9-42ec-8f60-1ef5c055869b","788f5349-8f1b-4336-a5bb-4a2b63057506","a488ebb3-2f03-4003-b5a4-d31b79c94b93","22762d51-0d60-46f6-b4d2-a470bb3de0ef","9b04d826-ffb0-42ef-a688-0cc4a9bba63a"],"propsByKey":{"9a5cb494-84f7-4a19-aa38-eff9f107d6c1":{"name":"coin","sourceUrl":"https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png?version=916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","frameSize":{"x":43,"y":43},"frameCount":6,"looping":true,"frameDelay":2,"version":"916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":129},"rootRelativePath":"assets/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png"},"c3d81dd8-5bb1-46d8-bcc9-b8900597848e":{"name":"retrocreature_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"12d303ea-efd9-42ec-8f60-1ef5c055869b":{"name":"face1","sourceUrl":null,"frameSize":{"x":107,"y":145},"frameCount":1,"looping":true,"frameDelay":12,"version":"pTZCJ2.k2sTzR54xtziGHPRQ7h2NZIDM","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":145},"rootRelativePath":"assets/12d303ea-efd9-42ec-8f60-1ef5c055869b.png"},"788f5349-8f1b-4336-a5bb-4a2b63057506":{"name":"face2","sourceUrl":null,"frameSize":{"x":108,"y":145},"frameCount":1,"looping":true,"frameDelay":12,"version":"UTWqlVSeUfWMPLYfDiXlNzN2.99LQRcq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":145},"rootRelativePath":"assets/788f5349-8f1b-4336-a5bb-4a2b63057506.png"},"a488ebb3-2f03-4003-b5a4-d31b79c94b93":{"name":"face3","sourceUrl":null,"frameSize":{"x":108,"y":147},"frameCount":1,"looping":true,"frameDelay":12,"version":"VOvrU_fOsYVgEQPnXcKo3sFA.hq6BrZS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":147},"rootRelativePath":"assets/a488ebb3-2f03-4003-b5a4-d31b79c94b93.png"},"22762d51-0d60-46f6-b4d2-a470bb3de0ef":{"name":"face4","sourceUrl":null,"frameSize":{"x":107,"y":144},"frameCount":1,"looping":true,"frameDelay":12,"version":"8fs6_zufo6ipjr11hw87_infdKEPmN0X","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":107,"y":144},"rootRelativePath":"assets/22762d51-0d60-46f6-b4d2-a470bb3de0ef.png"},"9b04d826-ffb0-42ef-a688-0cc4a9bba63a":{"name":"ducky_1","sourceUrl":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png","frameSize":{"x":395,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H7ci7a4skZiXiNGkaJwDu9pdgz_VHH_8/category_icons/ducky.png"}}};
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

//1) Read and run the code to understand how it works, and what is going wrong.
var points = 0;
var health = 50;
var coin = createSprite(200, 100);
coin.setAnimation("ducky_1");
coin.scale = 0.2;
var ghost = createSprite(200, 300);
ghost.setAnimation("face1");
ghost.scale = 0.75;
var enemy = createSprite(475, randomNumber(0, 400));
enemy.setAnimation("retrocreature_03_1");
enemy.velocityX = -7;
enemy.scale = 0.1;
var end = false;

function draw() {
  if (points==5) {
    ghost.setAnimation("face2");
  } 
  if (points==10) {
    ghost.setAnimation("face2");
  } 
  if (points==15) {
    ghost.setAnimation("face3");
  }
  if (points==20) {
    ghost.setAnimation("face4");
  } 
  //2) Identify the code that increases the score.
  if (ghost.isTouching(coin)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    coin.x = randomNumber(0, 400);
    coin.y = randomNumber(0, 400);

  }
  background("hotpink");
  fill("white");
  text("Points: " + points, 25, 25);
  text("Health: " + health, 25, 35);
  if(keyDown("up")) {
    ghost.y = ghost.y - 5;
  }
  if(keyDown("down")) {
    ghost.y = ghost.y + 5;
  }
  if(keyDown("left")) {
    ghost.x = ghost.x - 5;
  }
  if(keyDown("right")) {
    ghost.x = ghost.x + 5;
  }
  if (enemy.x<-30) {
    enemy.x = 450;
    enemy.y = randomNumber(0, 400);
  }
  drawSprites();
  if (health<=0) {
    end = true;
  }
  if (ghost.isTouching(enemy)) {
    health = health-1;
  }
  if (end) {
    background("black");
    fill(rgb(57, 255, 0));
    textSize(50);
    text("Game Over!" , 40, 200);
    textSize(30);
    text("Final Score:", 0, 30);
    text(points, 170, 30);
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
