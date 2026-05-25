

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","4d40ee52-c3cd-433c-af66-fc0587622e94","9a5cb494-84f7-4a19-aa38-eff9f107d6c1","fe35ed64-d9c5-4454-a71a-85d7cadb1040","3b213855-e72b-4711-9085-57c8e4b9e642","21b24b93-e42c-4290-8743-c7fae2f08d4e","0ac21547-1fe8-4b64-9ba5-3939e0a1b60c","e3abd297-a153-4f00-9da8-4fc5d6c0cd70","b3ea38e4-4dbc-4977-9c0d-e130462c0230"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9RVoxLEDzpXFBoFl3IgDoeGVeL46.UcR/category_characters/sun.png"},"4d40ee52-c3cd-433c-af66-fc0587622e94":{"name":"ghost","sourceUrl":"https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/4d40ee52-c3cd-433c-af66-fc0587622e94.png?version=3wZFPLED22q5fVegmkqZqTUQ5rVeHA0i","frameSize":{"x":46,"y":100},"frameCount":7,"looping":true,"frameDelay":3,"version":"3wZFPLED22q5fVegmkqZqTUQ5rVeHA0i","loadedFromSource":true,"saved":true,"sourceSize":{"x":184,"y":200},"rootRelativePath":"assets/4d40ee52-c3cd-433c-af66-fc0587622e94.png"},"9a5cb494-84f7-4a19-aa38-eff9f107d6c1":{"name":"coin","sourceUrl":"https://studio.code.org/v3/animations/dLsCb83n46dwOgOggzJWNKmlza9A2k0ACoIFNyQNd1c/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png?version=916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","frameSize":{"x":43,"y":43},"frameCount":6,"looping":true,"frameDelay":2,"version":"916MGsVdrWsVoVhm8E6Nqp_bENWXeb6r","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":129},"rootRelativePath":"assets/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png"},"fe35ed64-d9c5-4454-a71a-85d7cadb1040":{"name":"drumstick","sourceUrl":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png","frameSize":{"x":384,"y":384},"frameCount":1,"looping":true,"frameDelay":2,"version":"Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":384},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Pzgb8NyBmiy7GjEMah58tt6xTNFxM9_f/category_food/drumstick.png"},"3b213855-e72b-4711-9085-57c8e4b9e642":{"name":"Shedletsky","sourceUrl":null,"frameSize":{"x":352,"y":461},"frameCount":1,"looping":true,"frameDelay":12,"version":"wbAFYsha3D93Fcpn9FzIjKH4xzf9tg.K","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":461},"rootRelativePath":"assets/3b213855-e72b-4711-9085-57c8e4b9e642.png"},"21b24b93-e42c-4290-8743-c7fae2f08d4e":{"name":"Shedletsky-photo (1).jpg_1","sourceUrl":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/21b24b93-e42c-4290-8743-c7fae2f08d4e.png","frameSize":{"x":360,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"e2y3wdqhOtropVJcn2r5lukar3S6F7Ls","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":480},"rootRelativePath":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/21b24b93-e42c-4290-8743-c7fae2f08d4e.png"},"0ac21547-1fe8-4b64-9ba5-3939e0a1b60c":{"name":"Shedlet","sourceUrl":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/0ac21547-1fe8-4b64-9ba5-3939e0a1b60c.png","frameSize":{"x":360,"y":480},"frameCount":1,"looping":true,"frameDelay":4,"version":"9nEN9EvSJ4LTUH4.WTsAL92HRr4D5hba","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":480},"rootRelativePath":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/0ac21547-1fe8-4b64-9ba5-3939e0a1b60c.png"},"e3abd297-a153-4f00-9da8-4fc5d6c0cd70":{"name":"1x1x1x1_forsaken_render_by_versu.png_1","sourceUrl":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/e3abd297-a153-4f00-9da8-4fc5d6c0cd70.png","frameSize":{"x":370,"y":334},"frameCount":1,"looping":true,"frameDelay":4,"version":"AkbjArflXVPWwdPK17BbZY.omD_3Go0t","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":334},"rootRelativePath":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/e3abd297-a153-4f00-9da8-4fc5d6c0cd70.png"},"b3ea38e4-4dbc-4977-9c0d-e130462c0230":{"name":"pizzna","sourceUrl":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/b3ea38e4-4dbc-4977-9c0d-e130462c0230.png","frameSize":{"x":250,"y":141},"frameCount":1,"looping":true,"frameDelay":4,"version":"aJyuA9hlVErLUNRTyguR3JH_KK937TIR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":141},"rootRelativePath":"assets/v3/animations/079d687f-df2e-450a-afa9-6e3e21c23609/b3ea38e4-4dbc-4977-9c0d-e130462c0230.png"}}};
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
var pizzna = createSprite(200, 200);
pizzna.setAnimation("pizzna");
pizzna.scale = 3;
var points = 0;
var coin = createSprite(200, 100);
coin.setAnimation("drumstick");
coin.scale = 0.1;
var shedlet = createSprite(200, 300);
shedlet.setAnimation("Shedlet");
shedlet.scale = 0.2;
var enemy = createSprite(200, 200);
enemy.setAnimation("1x1x1x1_forsaken_render_by_versu.png_1");
enemy.scale = 0.2;
enemy.velocityX = -3;
var gameover = false;

function draw() {
  if (shedlet.isTouching(enemy)) {
    gameover = true;
  }
  if (enemy.x < 0) {
    enemy.x = 400;
  }
  //2) Identify the code that increases the score.
  if (shedlet.isTouching(coin)) {
    points = points + 1;
    //3) Add a line of code so that at least one sprite moves to a new location.
    coin.x = randomNumber(10, 400);
    coin.y = randomNumber(10, 400);

  }
  background("lightblue");
  if(keyDown("up")) {
    shedlet.y = shedlet.y - 5;
  }
  if(keyDown("down")) {
    shedlet.y = shedlet.y + 5;
  }
  if(keyDown("left")) {
    shedlet.x = shedlet.x - 5;
  }
  if(keyDown("right")) {
    shedlet.x = shedlet.x + 5;
  }
  drawSprites();
  text("Points: " + points, 25, 25);
  if (gameover) {
    background(rgb(0, 0, 0));
    fill("red");
    textSize(50);
    text("GAME OVER", 15, 200);
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
