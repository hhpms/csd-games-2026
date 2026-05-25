

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","b4ddcdc6-4738-4bd8-945d-8378d241114c","37562568-7e10-4442-92f2-05c5e3636720","d606ba88-1807-48b1-bff3-76910f8badcb","0e093edf-9daa-4d91-b8ee-35fb84729a82"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"b4ddcdc6-4738-4bd8-945d-8378d241114c":{"name":"knight","sourceUrl":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png","frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yeYHxzJDSVARt9bjkAajoPd5ik3WxGo1/category_fantasy/rpgcharacter_10.png"},"37562568-7e10-4442-92f2-05c5e3636720":{"name":"sword","sourceUrl":"assets/api/v1/animation-library/gamelab/vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ/category_video_games/gameplayobject_sword_02.png","frameSize":{"x":278,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vF8dmgMe65GlME9gDPM5mVu6LePu2wLZ/category_video_games/gameplayobject_sword_02.png"},"d606ba88-1807-48b1-bff3-76910f8badcb":{"name":"background_landscape07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"},"0e093edf-9daa-4d91-b8ee-35fb84729a82":{"name":"apple_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png","frameSize":{"x":333,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5HU7H.MzPJgfu.WtncglTeef4BzKuzc","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png"}}};
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

// 
//1) Read and run the code to understand how it works, and what is going wrong.
var bq = createSprite(200, 200);
bq.setAnimation("background_landscape07_1");
var points = 0;
var apple = createSprite(200, 100);
apple.setAnimation("apple_1_1");
var ghost = createSprite(200, 300);
ghost.setAnimation("knight");
var sword = createSprite(200, 200);
sword.setAnimation("sword");
ghost.scale = 0.5;
sword.scale = 0.1;
apple.scale = 0.2;
function draw() {
  //2) Identify the code that increases the score.
  if (ghost.isTouching(apple)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    apple.x = randomNumber(0, 400);
    apple.y = randomNumber(0, 400);
    sword.x = randomNumber(0, 400);
    sword.y = randomNumber(0, 400);

  }
  if (keyDown("up")) {
    ghost.y = ghost.y - 5;
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
  if (ghost.isTouching(sword)) {
    background("blue");
    fill("green");
    textSize(12);
    text("GAME OVER", 178, 217);
    textSize(500);
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
