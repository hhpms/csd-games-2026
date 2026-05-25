

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","4d40ee52-c3cd-433c-af66-fc0587622e94","b52dd4ef-b975-4c02-a424-fa295d1385bf","9a5cb494-84f7-4a19-aa38-eff9f107d6c1"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"PLA","sourceUrl":null,"frameSize":{"x":86,"y":83},"frameCount":4,"looping":true,"frameDelay":12,"version":"MScF6AGvljBuNJBqowyjrS59Q8DUWUSM","loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":166},"rootRelativePath":"assets/37209947-91c8-432c-a741-74f76ad3faac.png"},"4d40ee52-c3cd-433c-af66-fc0587622e94":{"name":"TaiwanSprint","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":4,"version":"ELtFiiPe4dfP3oEx1fzSfnt_KqhyTQH8","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/4d40ee52-c3cd-433c-af66-fc0587622e94.png"},"b52dd4ef-b975-4c02-a424-fa295d1385bf":{"name":"TaiwanIdle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"S9eVM8gQYaDdYdWQP3EDYvRXtHWKsKIo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/b52dd4ef-b975-4c02-a424-fa295d1385bf.png"},"9a5cb494-84f7-4a19-aa38-eff9f107d6c1":{"name":"coin","sourceUrl":null,"frameSize":{"x":43,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"9dzUCU4kUziq3BAEG8c0VFJ6uPBPF.C8","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":43},"rootRelativePath":"assets/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png"}}};
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
coin.setAnimation("coin");
var TaiwanSprint = createSprite(200, 200);
TaiwanSprint.setAnimation("TaiwanSprint");
var PLA = createSprite(430, -15);
PLA.setAnimation("PLA");
PLA.velocityX = 5;
PLA.velocityY = -5;

function draw() {
  if (PLA.y<0) {
    PLA.y = 430;
    PLA.x = -15;
  }
  if (TaiwanSprint.isTouching(coin)) {
    points = points + 1;
    coin.x = randomNumber(0, 350);
    coin.y = randomNumber(0, 350);
  }
  if (TaiwanSprint.isTouching(PLA)) {
    points = 0;
  }
  background("lightblue");
  text("Points: " + points, 25, 25);
  if (keyDown("up")) {
    TaiwanSprint.y = TaiwanSprint.y - 5;
  } else {
    
  }
  if (keyDown("down")) {
    TaiwanSprint.y = TaiwanSprint.y + 5;
  } else {
    
  }
  if (keyDown("left")) {
    TaiwanSprint.x = TaiwanSprint.x - 5;
  } else {
    
  }
  if (keyDown("right")) {
    TaiwanSprint.x = TaiwanSprint.x + 5;
  } else {
    
  }
  drawSprites();
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
