

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","4d40ee52-c3cd-433c-af66-fc0587622e94","fbd69165-1706-46de-ba49-1d9d276d9029","d2f6dad8-b1b9-478d-8747-59313691e17c"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"4d40ee52-c3cd-433c-af66-fc0587622e94":{"name":"ghost","sourceUrl":null,"frameSize":{"x":292,"y":385},"frameCount":1,"looping":true,"frameDelay":12,"version":"wUuwgP6jdTh6sN2gpQF7mgqZa9hF8H8S","loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":385},"rootRelativePath":"assets/4d40ee52-c3cd-433c-af66-fc0587622e94.png"},"fbd69165-1706-46de-ba49-1d9d276d9029":{"name":"coin","sourceUrl":null,"frameSize":{"x":400,"y":232},"frameCount":1,"looping":true,"frameDelay":12,"version":"kKcqNHj3ywOnRXQYWFgxVog7wGZzS2Ox","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":232},"rootRelativePath":"assets/fbd69165-1706-46de-ba49-1d9d276d9029.png"},"d2f6dad8-b1b9-478d-8747-59313691e17c":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
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

var bg = createSprite(200, 200);
bg.setAnimation("bg");
var sun = createSprite(200, 200);
sun.setAnimation("sun");
sun.scale = 0.4;
//1) Read and run the code to understand how it works, and what is going wrong.
var points = 0;
var coin = createSprite(200, 100);
coin.setAnimation("coin");
coin.scale = 0.1;
var ghost = createSprite(200, 300);
ghost.setAnimation("ghost");
ghost.scale = 0.3;
sun.velocityX = -2;

var gameover = false;
function draw() {
  if (ghost.isTouching(sun)) {
    gameover = true;
  }
  if (sun.x < 0) {
    sun.x = 400;
  }
  //2) Identify the code that increases the score.
  if (ghost.isTouching(coin)) {
    points = points + 1;
    coin.x = randomNumber(0, 400);
    coin.y = randomNumber(0, 400);
    //3) Add a line of code so that at least one sprite moves to a new location.

  }
  background("lightblue");
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
  drawSprites();
  text("Points: " + points, 25, 25);
  if (gameover) {
    background("black");
    textSize(50);
    fill("red");
    text("game over", 122, 174);
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
