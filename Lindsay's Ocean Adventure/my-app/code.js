

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","4d40ee52-c3cd-433c-af66-fc0587622e94","9a5cb494-84f7-4a19-aa38-eff9f107d6c1","2abde301-a67f-4864-a12c-f93e75bf8cd0","454064f0-daa3-4162-9ccf-8d4049986038","3e6965db-f6d2-45b7-8aef-86c7a97b1bd7"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"4d40ee52-c3cd-433c-af66-fc0587622e94":{"name":"ghost","sourceUrl":"https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/4d40ee52-c3cd-433c-af66-fc0587622e94.png?version=3wZFPLED22q5fVegmkqZqTUQ5rVeHA0i","frameSize":{"x":46,"y":100},"frameCount":7,"looping":true,"frameDelay":3,"version":"3wZFPLED22q5fVegmkqZqTUQ5rVeHA0i","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":200},"rootRelativePath":"assets/https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/4d40ee52-c3cd-433c-af66-fc0587622e94.png?version=3wZFPLED22q5fVegmkqZqTUQ5rVeHA0i"},"9a5cb494-84f7-4a19-aa38-eff9f107d6c1":{"name":"coin","sourceUrl":"https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png?version=916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","frameSize":{"x":43,"y":43},"frameCount":6,"looping":true,"frameDelay":2,"version":"916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":129},"rootRelativePath":"assets/https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png?version=916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r"},"2abde301-a67f-4864-a12c-f93e75bf8cd0":{"name":"fish_pink_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0fbafj_tH03NNJjycS77mGDU0mtt7Hel/category_animals/fish_pink.png","frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":2,"version":"0fbafj_tH03NNJjycS77mGDU0mtt7Hel","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":134,"y":47},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0fbafj_tH03NNJjycS77mGDU0mtt7Hel/category_animals/fish_pink.png"},"454064f0-daa3-4162-9ccf-8d4049986038":{"name":"cuteanimals_shark_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HnjxTRCzgBissqpg2FwpAGnHYRinXXOO/category_animals/cuteanimals_shark.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnjxTRCzgBissqpg2FwpAGnHYRinXXOO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnjxTRCzgBissqpg2FwpAGnHYRinXXOO/category_animals/cuteanimals_shark.png"},"3e6965db-f6d2-45b7-8aef-86c7a97b1bd7":{"name":"underseadeco_24_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt/category_aquatic_objects/underseadeco_24.png","frameSize":{"x":301,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt/category_aquatic_objects/underseadeco_24.png"}}};
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
var coin = createSprite(200, 100);
coin.setAnimation("underseadeco_24_1");
coin.scale = 0.2;
var ghost = createSprite(200, 300);
ghost.setAnimation("fish_pink_1");
ghost.scale = 1;
var shark = createSprite(200, 100);
shark.setAnimation("cuteanimals_shark_1");
shark.scale = 0.40;
shark.velocityX = 5;
var Gameover = false;

function draw() {
  //2) Identify the code that increases the score.
  if (ghost.isTouching(coin)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    coin.y = randomNumber(0, 400);
    coin.x = randomNumber(0, 400);

  }
  background("lightblue");
  text("Points: " + points, 25, 25);
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
  if (shark.x > 500) {
    shark.x = -100;
    shark.y = randomNumber(0, 400);
  }
  if (shark.isTouching(ghost)) {
    Gameover = true;
  }
  drawSprites();
  if (Gameover) {
    background("black");
    fill("red");
    textSize(75);
    text("Gameover", 4, 180);
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
