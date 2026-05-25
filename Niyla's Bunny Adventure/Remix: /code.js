

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["579e1940-acfb-4e06-bb79-ec2c30de9304","c4946727-09a3-4840-a02a-d6dcfbc9a19a","97d0c45b-a8e7-42c9-a399-f368031494e1","7c91b9c3-834c-4cb5-8907-b3fcb3dc7dab","f5eff2f8-7925-46fa-aa76-673c4df548f0"],"propsByKey":{"579e1940-acfb-4e06-bb79-ec2c30de9304":{"name":"animalhead_coyote_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5TTK.FVKVAnAtZfXx4AE8T71Ll9APlKU/category_animals/animalhead_coyote.png","frameSize":{"x":396,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"5TTK.FVKVAnAtZfXx4AE8T71Ll9APlKU","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5TTK.FVKVAnAtZfXx4AE8T71Ll9APlKU/category_animals/animalhead_coyote.png"},"c4946727-09a3-4840-a02a-d6dcfbc9a19a":{"name":"bunny1_ready_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM/category_animals/bunny1_ready.png","frameSize":{"x":120,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qK4aRpIy7j6cT3CbOFjSpMeU4KhS0KZM/category_animals/bunny1_ready.png"},"97d0c45b-a8e7-42c9-a399-f368031494e1":{"name":"steak_1","sourceUrl":"assets/api/v1/animation-library/gamelab/agWJYAfahxbC4Id0C8DMt8S71ZDArT5_/category_food/steak.png","frameSize":{"x":377,"y":245},"frameCount":1,"looping":true,"frameDelay":2,"version":"agWJYAfahxbC4Id0C8DMt8S71ZDArT5_","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":245},"rootRelativePath":"assets/api/v1/animation-library/gamelab/agWJYAfahxbC4Id0C8DMt8S71ZDArT5_/category_food/steak.png"},"7c91b9c3-834c-4cb5-8907-b3fcb3dc7dab":{"name":"background_landscape03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4/category_backgrounds/background_landscape03.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4/category_backgrounds/background_landscape03.png"},"f5eff2f8-7925-46fa-aa76-673c4df548f0":{"name":"bg_landscape06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png"}}};
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
var bg = createSprite(200, 200);
bg.setAnimation("bg_landscape06_1");
var points = 0;
var coin = createSprite(200, 100);
coin.setAnimation("steak_1");
coin.scale = 0.25;
var ghost = createSprite(200, 300);
ghost.scale = 0.5;
ghost.setAnimation("bunny1_ready_1");
var enemy = createSprite(200, 200);
enemy.setAnimation("animalhead_coyote_1");
enemy.scale = 0.15;
enemy.velocityX = 5;
var gameover = false;

function draw() {
  //2) Identify the code that increases the score.
  if (ghost.isTouching(coin)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    coin.x = randomNumber(0, 400);
    coin.y = randomNumber(0, 400);

  }
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
  if (enemy.x > 400) {
    enemy.x = 0;
  }
  drawSprites();
  text("Points: " + points, 25, 25);
  if (ghost.isTouching(enemy)) {
    gameover = true;
  }
  if (gameover) {
    background("red");
    fill("yellow");
    textSize(20);
    text("gameover", 200, 200);
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
