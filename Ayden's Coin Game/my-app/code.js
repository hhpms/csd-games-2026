
// Simple replacement for Code.org sound on GitHub Pages
var __sounds = {};

function playSound(url, loop) {
  try {
    if (!__sounds[url]) {
      __sounds[url] = new Audio(url);
    }
    __sounds[url].loop = !!loop;
    __sounds[url].currentTime = 0;
    __sounds[url].play().catch(function(){});
  } catch (e) {
    console.log("Sound error:", url, e);
  }
}

function stopSound(url) {
  try {
    if (url && __sounds[url]) {
      __sounds[url].pause();
      __sounds[url].currentTime = 0;
    } else {
      Object.keys(__sounds).forEach(function(key) {
        __sounds[key].pause();
        __sounds[key].currentTime = 0;
      });
    }
  } catch (e) {
    console.log("Stop sound error:", url, e);
  }
}



var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["37209947-91c8-432c-a741-74f76ad3faac","3a1e0d52-e38e-4c55-bb42-aa4535ab0548","d8ac070d-7664-4d80-938a-ecd4e1e60c1d","4d40ee52-c3cd-433c-af66-fc0587622e94","bd824219-94d2-4bf0-b1a1-da792fa36b75","620c30ac-fbc0-4415-b99c-c718b09d4ad8","8ae76170-395b-43e5-a425-5804e5798880","9bb1c26b-3c61-4bec-9c67-c35bfbb851f4","2d9f2530-aefa-4626-8226-d34b25eddfdb","9a5cb494-84f7-4a19-aa38-eff9f107d6c1","a3104733-60fe-4072-b717-a9fdcf29acb0","18dbbb89-279a-47af-9331-88e4a5f6f68c","bf56c9ea-b2ff-4d57-b3eb-998222c75fc4","75136a47-cd81-4742-a07e-a2a11ecb4c1d","04acb17f-fe1c-42d7-afea-b23085b49733","01930621-5b97-405b-8964-b560279b3d81","f47b173f-abe2-4117-948c-5b843f0622dd","550f84c5-882f-414c-beb7-59cfd0ff599a","f9d7c7a2-d48d-437d-a6b1-df7149e27bab","f4f6c540-77e3-49d9-95f4-c7ac496ddfc8","b03b4bc4-3f7e-45f5-aba4-01bbee4ea157","07f299f5-48c5-4b69-8b33-c262599ff620","3bf316ee-c6a1-4e70-847f-f2ac1112917a","abac78be-44fd-4d72-84b7-42ccfb7e55fc","24736b45-7031-45d9-b4ab-1b712fd26e79","f1985dba-913f-434d-a08c-dd68e7ee8028","d3016ff4-912e-4720-8760-a80c5ce17cfe","cfac00c1-8a11-4d43-bb74-8c33a62a5311","9b27e4e1-e58f-41a5-a5b4-729bbfa781bc","33c2d964-dd60-46cd-b499-928aae09d6ec","7a8109f2-4ae3-401e-9360-7377b6e14c76","57ccd798-2514-45c5-8714-d52e205186e6","fe4ea796-58b9-4402-ac25-e56ec8d82a21","c4deee10-7b54-4d8a-b999-a9ec20f66f41","a67832f2-6209-441b-b038-a9a2f0ff09ee"],"propsByKey":{"37209947-91c8-432c-a741-74f76ad3faac":{"name":"spike guy","sourceUrl":null,"frameSize":{"x":120,"y":161},"frameCount":2,"looping":true,"frameDelay":12,"version":"E0r6MYqXtL261yVwfWknGzZEUJNvV7NA","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":161},"rootRelativePath":"assets/37209947-91c8-432c-a741-74f76ad3faac.png"},"3a1e0d52-e38e-4c55-bb42-aa4535ab0548":{"name":"spike guy_HARD","sourceUrl":null,"frameSize":{"x":120,"y":161},"frameCount":2,"looping":true,"frameDelay":5,"version":"SUPr7iQEOKjFu1A1FCKuVsrLYQ7xQZgb","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":161},"rootRelativePath":"assets/3a1e0d52-e38e-4c55-bb42-aa4535ab0548.png"},"d8ac070d-7664-4d80-938a-ecd4e1e60c1d":{"name":"spike guyvictory","sourceUrl":null,"frameSize":{"x":120,"y":161},"frameCount":2,"looping":true,"frameDelay":1,"version":"h9pLgBUa4AEMVdf5SobNU5.gkY3eIgT_","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":161},"rootRelativePath":"assets/d8ac070d-7664-4d80-938a-ecd4e1e60c1d.png"},"4d40ee52-c3cd-433c-af66-fc0587622e94":{"name":"ghost","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":12,"version":"JbKUROJeN37JTDptCM7RdgGs0UegqOKX","loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/4d40ee52-c3cd-433c-af66-fc0587622e94.png"},"bd824219-94d2-4bf0-b1a1-da792fa36b75":{"name":"ghost VICTORY","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":1,"version":"n_Q4lX7KzM4Lbm0YLLRAjNvNGZYs0wWu","loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/bd824219-94d2-4bf0-b1a1-da792fa36b75.png"},"620c30ac-fbc0-4415-b99c-c718b09d4ad8":{"name":"poison ghost1 ","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":12,"version":"wNqF0c1DYEShhfUfmEH2EBh7t.jQvXJP","loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/620c30ac-fbc0-4415-b99c-c718b09d4ad8.png"},"8ae76170-395b-43e5-a425-5804e5798880":{"name":"poison ghost","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"3BCWLAElZ7prqvJhUbjf1BO1v_8QpJWI","loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/8ae76170-395b-43e5-a425-5804e5798880.png"},"9bb1c26b-3c61-4bec-9c67-c35bfbb851f4":{"name":"poison ghost down bad","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":3,"looping":true,"frameDelay":12,"version":"hENem6DzGo2yFSdQkY8.2CuPTrJFBZA6","loadedFromSource":true,"saved":true,"sourceSize":{"x":334,"y":286},"rootRelativePath":"assets/9bb1c26b-3c61-4bec-9c67-c35bfbb851f4.png"},"2d9f2530-aefa-4626-8226-d34b25eddfdb":{"name":"SOULDEATH","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":17,"looping":false,"frameDelay":4,"version":"1P9N7nc_JDGByaiUuRIIoxwQovXyPUXN","loadedFromSource":true,"saved":true,"sourceSize":{"x":668,"y":715},"rootRelativePath":"assets/2d9f2530-aefa-4626-8226-d34b25eddfdb.png"},"9a5cb494-84f7-4a19-aa38-eff9f107d6c1":{"name":"coin","sourceUrl":null,"frameSize":{"x":261,"y":390},"frameCount":2,"looping":true,"frameDelay":12,"version":"KC9X2qb9riM0LH9cizRP.rMmTBeM7WbF","loadedFromSource":true,"saved":true,"sourceSize":{"x":522,"y":390},"rootRelativePath":"assets/9a5cb494-84f7-4a19-aa38-eff9f107d6c1.png"},"a3104733-60fe-4072-b717-a9fdcf29acb0":{"name":"spike_bot_","sourceUrl":null,"frameSize":{"x":116,"y":157},"frameCount":3,"looping":true,"frameDelay":3,"version":"Qz6iEfFxvENyZs2yuhNEFGwh6N6Pkeoq","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":314},"rootRelativePath":"assets/a3104733-60fe-4072-b717-a9fdcf29acb0.png"},"18dbbb89-279a-47af-9331-88e4a5f6f68c":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":95,"y":29},"frameCount":4,"looping":true,"frameDelay":3,"version":"2DZHZjQ9WANPzZuT3peGUD98oYhiTmqx","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":116},"rootRelativePath":"assets/18dbbb89-279a-47af-9331-88e4a5f6f68c.png"},"bf56c9ea-b2ff-4d57-b3eb-998222c75fc4":{"name":"ghost dmage","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":2,"looping":true,"frameDelay":10,"version":"Qp4KLdj0H6G.DHjklbx19VTgFMtpmqp4","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":286},"rootRelativePath":"assets/bf56c9ea-b2ff-4d57-b3eb-998222c75fc4.png"},"75136a47-cd81-4742-a07e-a2a11ecb4c1d":{"name":"ghost dmage 2","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":3,"looping":true,"frameDelay":4,"version":"_KdKzHddoXngw5TMy8jtBa_i1zxv29o5","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":334,"y":286},"rootRelativePath":"assets/75136a47-cd81-4742-a07e-a2a11ecb4c1d.png"},"04acb17f-fe1c-42d7-afea-b23085b49733":{"name":"FullcoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":3,"looping":true,"frameDelay":4,"version":"739oof.mUBLP2wXauOy8htc.DXr7gBgH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":621},"rootRelativePath":"assets/04acb17f-fe1c-42d7-afea-b23085b49733.png"},"01930621-5b97-405b-8964-b560279b3d81":{"name":"ACTIVATEDGAUGE","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":10,"looping":true,"frameDelay":3,"version":"TX1UHcgDN3zW4pArPf_CH09VLEaCdtG1","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1082,"y":1035},"rootRelativePath":"assets/01930621-5b97-405b-8964-b560279b3d81.png"},"f47b173f-abe2-4117-948c-5b843f0622dd":{"name":"EmptycoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"oPPBqT7BLydQq4lq1t40p..tdQv5ZJAt","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/f47b173f-abe2-4117-948c-5b843f0622dd.png"},"550f84c5-882f-414c-beb7-59cfd0ff599a":{"name":"PartialcoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"_aG6HLPlDupdfrWNGHwnC2V0NUvTuQrm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/550f84c5-882f-414c-beb7-59cfd0ff599a.png"},"f9d7c7a2-d48d-437d-a6b1-df7149e27bab":{"name":"lilmorecoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"xVvrI_w6ToHQej_nf9e8x87rgevv8Rpn","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/f9d7c7a2-d48d-437d-a6b1-df7149e27bab.png"},"f4f6c540-77e3-49d9-95f4-c7ac496ddfc8":{"name":"halfcoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"2BPKu3WRXr9behli7Or7DwJ8Z5Cspjaz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/f4f6c540-77e3-49d9-95f4-c7ac496ddfc8.png"},"b03b4bc4-3f7e-45f5-aba4-01bbee4ea157":{"name":"morehalfcoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"fniNzjzH.d9940TD8AKRMaLXIyQdbenc","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/b03b4bc4-3f7e-45f5-aba4-01bbee4ea157.png"},"07f299f5-48c5-4b69-8b33-c262599ff620":{"name":"almostfullcoinGauge","sourceUrl":null,"frameSize":{"x":541,"y":207},"frameCount":2,"looping":true,"frameDelay":12,"version":"hQF4F1hLFWQyR.5tC6R9ybAYCGE8PsMQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":541,"y":414},"rootRelativePath":"assets/07f299f5-48c5-4b69-8b33-c262599ff620.png"},"3bf316ee-c6a1-4e70-847f-f2ac1112917a":{"name":"retro_coin_1","sourceUrl":null,"frameSize":{"x":95,"y":113},"frameCount":2,"looping":true,"frameDelay":12,"version":"KaBOC2P4aUxDUd2tD6u4vdgtoQwVDMGC","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":113},"rootRelativePath":"assets/3bf316ee-c6a1-4e70-847f-f2ac1112917a.png"},"abac78be-44fd-4d72-84b7-42ccfb7e55fc":{"name":"specialcoin","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":7,"looping":true,"frameDelay":3,"version":"IE5g_Zlk3g98Tly_wGpwgdEn6WhnXe6J","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/abac78be-44fd-4d72-84b7-42ccfb7e55fc.png"},"24736b45-7031-45d9-b4ab-1b712fd26e79":{"name":"retro_powerup_heart_1","sourceUrl":null,"frameSize":{"x":352,"y":352},"frameCount":2,"looping":true,"frameDelay":12,"version":"amOvDkC9bE9udMhFbDoJb2_O5JGKBdvP","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":704},"rootRelativePath":"assets/24736b45-7031-45d9-b4ab-1b712fd26e79.png"},"f1985dba-913f-434d-a08c-dd68e7ee8028":{"name":"gameplay_redstar_1","sourceUrl":null,"frameSize":{"x":376,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"_XVDKW6P3Gg7uWkzYN4fgkX2pp5kZKQ0","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":800},"rootRelativePath":"assets/f1985dba-913f-434d-a08c-dd68e7ee8028.png"},"d3016ff4-912e-4720-8760-a80c5ce17cfe":{"name":"gameplay_redstar_2","sourceUrl":null,"frameSize":{"x":376,"y":400},"frameCount":8,"looping":true,"frameDelay":12,"version":"eiyiVS_2Ou1sUI6KGblfeKNWbSm8yuFC","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1128,"y":1200},"rootRelativePath":"assets/d3016ff4-912e-4720-8760-a80c5ce17cfe.png"},"cfac00c1-8a11-4d43-bb74-8c33a62a5311":{"name":"gameplay_story","sourceUrl":null,"frameSize":{"x":376,"y":399},"frameCount":4,"looping":true,"frameDelay":12,"version":"UvHmPCTiZk8qncU2VOGIrSf3BHnxXLsO","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":752,"y":798},"rootRelativePath":"assets/cfac00c1-8a11-4d43-bb74-8c33a62a5311.png"},"9b27e4e1-e58f-41a5-a5b4-729bbfa781bc":{"name":"gameplay_redstar_1_copy_1","sourceUrl":null,"frameSize":{"x":376,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"AiCFq0QI0LdbR.sWExTW5AwBQtVDHkZC","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":800},"rootRelativePath":"assets/9b27e4e1-e58f-41a5-a5b4-729bbfa781bc.png"},"33c2d964-dd60-46cd-b499-928aae09d6ec":{"name":"JUMPSCARE","sourceUrl":null,"frameSize":{"x":287,"y":408},"frameCount":3,"looping":true,"frameDelay":3,"version":"qa0BNb2V_EDXsm15YPGXRWwsnEBtro0q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":574,"y":816},"rootRelativePath":"assets/33c2d964-dd60-46cd-b499-928aae09d6ec.png"},"7a8109f2-4ae3-401e-9360-7377b6e14c76":{"name":"toothbrush_1","sourceUrl":"assets/api/v1/animation-library/gamelab/M_rD8tkih82IEdwHQ8Z647Ig_hq2KaIn/category_tools/toothbrush.png","frameSize":{"x":74,"y":107},"frameCount":1,"looping":true,"frameDelay":2,"version":"M_rD8tkih82IEdwHQ8Z647Ig_hq2KaIn","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":107},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M_rD8tkih82IEdwHQ8Z647Ig_hq2KaIn/category_tools/toothbrush.png"},"57ccd798-2514-45c5-8714-d52e205186e6":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":8,"looping":true,"frameDelay":1,"version":"C919zWmtAwv_ucLKsWbyJwU748Fz87XL","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/57ccd798-2514-45c5-8714-d52e205186e6.png"},"fe4ea796-58b9-4402-ac25-e56ec8d82a21":{"name":"select_button_1","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"EoEm2MTt8Z6wQChqhsf.uadyMXvd2o.b","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/fe4ea796-58b9-4402-ac25-e56ec8d82a21.png"},"c4deee10-7b54-4d8a-b999-a9ec20f66f41":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":60,"version":"VDdZViK.PWTlpbNgaPjt.4rXsuYj3DR.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/c4deee10-7b54-4d8a-b999-a9ec20f66f41.png"},"a67832f2-6209-441b-b038-a9a2f0ff09ee":{"name":"wing_bot_1","sourceUrl":null,"frameSize":{"x":218,"y":128},"frameCount":6,"looping":true,"frameDelay":3,"version":"XoPxGaDIOUBRy3t_WpPtRUNJ1W5Bmv45","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":436,"y":384},"rootRelativePath":"assets/a67832f2-6209-441b-b038-a9a2f0ff09ee.png"}}};
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

var points = 0;
var HARD = createSprite(300, 100);
HARD.setAnimation("gameplay_redstar_1");
var EASY = createSprite(100, 100);
EASY.setAnimation("gameplay_redstar_1_copy_1");
EASY.visible = 0;
var coin = createSprite(200, 100);
coin.setAnimation("coin");
coin.scale = 0.1;
var potion = createSprite(randomNumber(50, 200), randomNumber(1, 200));
potion.setAnimation("retro_powerup_heart_1");
potion.scale = 0.4;
potion.visible = 0;
var ghost = createSprite(200, 300);
ghost.setAnimation("ghost");
ghost.scale = 0.3;
ghost.bounciness = 0.5;
var SWORD = createSprite(900, 200);
SWORD.setAnimation("animation_1");
var spike = createSprite(1, 116);
spike.setAnimation("spike guy");
spike.scale = 0.45;
var Spike = createSprite(-24, 2);
Spike.setAnimation("spike_bot_");
var health = 2;
Spike.scale = 0.45;
var ghostdeath = createSprite(900, 200);
ghostdeath.scale = 0.3;
var COIN = 0;
var J = createSprite(200, 200);
J.setAnimation("JUMPSCARE");
J.visible = 0;
var coingauge = createSprite(60, 376);
coingauge.setAnimation("EmptycoinGauge");
//the animation doesn't work idk why :(
coingauge.scale = 0.3;
coingauge.visible = 0;
playSound("assets/category_background/wavering_wind.mp3", false);

var HARDMODE = 0;
var story = false;
var START = 0;
var options = -1;
music = 0;
function draw() {
  fill("white");
  createEdgeSprites();
  ghost.bounceOff(topEdge);
  ghost.bounceOff(bottomEdge);
  ghost.bounceOff(leftEdge);
  ghost.bounceOff(rightEdge);
  if (START == 1) {
    if (HARDMODE == 1) {
          stopSound("assets/category_background/wavering_wind.mp3");
          music = music + 1;
          if (music == 1) {
            playSound("assets/category_background/eerie_beginnings.mp3", false);
            music = music + 1;
          }
          ghost.visible = 1;
          spike.visible = 1;
          coin.visible = 1;
          if (ghost.isTouching(coin)) {
            points = points + 1;
            COIN = COIN + 1;
            coin.x = randomNumber(1, 400);
            coin.y = randomNumber(400, 1);
            playSound("assets/category_retro/retro_game_ui_select_4.mp3", false);
            var sec = sec + 1;
            if (COIN > 48) {
              sprite.setAnimation("specialcoin");
              spike.velocityX = 10;
              purplemove.visible = 1;
            }
            if (COIN > 99) {
              stopSound("assets/category_background/outback.mp3");
              coin.setAnimation("specialcoin");
              if (COIN == 100) {
                playSound("assets/CONGRATS!.mp3", false);
                playSound("assets/category_alerts/vibrant_game_rigning_alert_1.mp3", false);
                playSound("assets/category_male_voiceover/you_win_male.mp3", false);
                coin.x = ghost.x;
                coin.y = ghost.y;
              }
            }

          }
          if (keyDown("j")) {
            J.visible = 1;
            playSpeech("very scary", "female", "English");
            playSound("assets/category_instrumental/digital_drum_repeating.mp3", false);
            playSound("assets/GAME OVER-2.mp3", false);
          } else {
            J.visible = 0;
            stopSound("assets/GAME OVER-2.mp3");
            stopSound("assets/category_instrumental/digital_drum_repeating.mp3");
          }
          background("black");
          text("Points: " + points, 25, 25);
          text("Coins collected: " + COIN, 25, 44);
          if(keyDown("up") || keyDown("w")) {
            ghost.y = ghost.y - 5;
          }
          if(keyDown("down") || keyDown("s")) {
            ghost.y = ghost.y + 5;
          }
          if(keyDown("left") || keyDown("a")) {
            ghost.x = ghost.x - 5;
          }
          if(keyDown("right") || keyDown("d")) {
            ghost.x = ghost.x + 5;
          }
          if (keyWentDown("space") || mouseWentDown("leftButton")) {
            if (health == 0) {
              SWORD.visible = 0;
            } else {
              SWORD.setAnimation("toothbrush_1");
              SWORD.visible = 1;
              SWORD.x = ghost.x;
              SWORD.y = ghost.y;
              SWORD.rotation = World.mouseX;
              text("PRANK!", 193, 349);
              text("HAHAHAHAHAHAHAHA HAHAHAH!", 25, 140);
              text("this is HARD MODE SON!", 62, 308);
              playSound("assets/category_digital/boing_2.mp3", false);
            }
          } else {
            SWORD.visible = 0;
            SWORD.x = 900;
          }
          if (1 > points) {
            textSize(27);
            text("GET 50 COINS TO WIN!", 47, 320);
          }
          if (spike.isTouching(ghost)) {
            ghost.setAnimation("ghost dmage 2");
            if (health > 0) {
              playSound("assets/category_retro/retro_game_twinkly_pickup_2.mp3", false);
            } else {
              text("GAME OVER", 121, 146);
            }
            health = health - 1;
            spike.x = 2;
            spike.y = randomNumber(1, 290);
            if (health == 0) {
              stopSound("assets/category_background/eerie_beginnings.mp3");
              playSound("assets/GAME OVER.mp3", false);
              playSound("assets/idk.mp3", false);
              spike.x = ghost.x;
              spike.y = ghost.y;
              spike.visible = 0;
            }
          } else {
            spike.velocityX = 4;
            if (388 < spike.x) {
              spike.x = 2;
              spike.y = ghost.y;
            }
          }
          if (SWORD.isTouching(spike)) {
            playSound("assets/category_alerts/vibrant_game_life_lost_1.mp3", false);
          }
          if (points == 8) {
            spike.setAnimation("spike guyvictory");
          }
          if (points > 10) {
            spike.setAnimation("spike guy_HARD");
            spike.velocityX = 7;
          }
          if (points > 20) {
            var Posion = 0;
            spike.velocityX = 7.2;
            Spike.velocityY = -3;
            if (Spike.y < 5) {
              Spike.y = 365;
              Spike.x = randomNumber(1, 290);
            }
            if (Spike.isTouching(ghost)) {
              playSound("assets/category_collect/collect_item_bling_4.mp3", false);
              if (health == 2) {
                ghost.setAnimation("poison ghost");
                ghost.velocityY = 0.5;
                ghost.velocityX = 1;
                Posion = Posion + 1;
                ghost.velocityY = Posion;
                ghost.velocityX = Posion;
              } else {
                if (health == 1) {
                  Posion = Posion + 2;
                  ghost.setAnimation("poison ghost down bad");
                  ghost.velocityY = Posion + 1.5;
                  ghost.velocityX = Posion;
                }
              }
            }
          }
          if (points > 28) {
            spike.velocityX = 8;
            potion.scale = 0.1;
            potion.visible = 1;
            if (potion.isTouching(ghost)) {
              playSound("assets/category_achievements/peaceful_win_2.mp3", false);
              Posion = 0;
              ghost.velocityX = 0;
              ghost.velocityY = 0;
              if (health == 2) {
                ghost.setAnimation("ghost dmage 2");
              }
              if (health == 1) {
                ghost.setAnimation("ghost dmage");
              }
              potion.x = randomNumber(1, 200);
              potion.y = randomNumber(1, 400);
            }
          }
          if (points > 30) {
            spike.velocityX = 9;
          }
          if (points > 40) {
            spike.velocityX = 10;
          }
          if (points > 60) {
            spike.velocityX = 8.7;
          }
          if (points > 70) {
            spike.velocityX = 9.5;
          }
          if (points > 80) {
            spike.velocityX = 10;
          }
          if (points > 90) {
            spike.velocityX = 14;
          }
          if (points > 100) {
            spike.velocityX = 20;
          }
          if (COIN > 1) {
            coingauge.setAnimation("PartialcoinGauge");
          }
          if (COIN > 2) {
            coingauge.setAnimation("lilmorecoinGauge");
          }
          if (COIN == 4) {
            coingauge.setAnimation("halfcoinGauge");
          }
          if (COIN == 5) {
            coingauge.setAnimation("morehalfcoinGauge");
          }
          if (COIN == 6) {
            coingauge.setAnimation("morehalfcoinGauge");
          }
          if (COIN == 7) {
            coingauge.setAnimation("almostfullcoinGauge");
          }
          if (COIN == 8) {
            coingauge.setAnimation("FullcoinGauge");
            if (keyWentDown("c")) {
              playSound("assets/category_pop/vibrant_game_vanishing_item_1.mp3", false);
              coingauge.setAnimation("ACTIVATEDGAUGE");
            }
          }
          //I mean all the coding is fine but animations off...WHY CODE.ORG?? 
          //WHY DO YOU HAVE TO BE SO TERRIBLE??
          if (COIN > 49) {
            background("black");
            fill("black");
            stroke("white");
            textSize(26);
            strokeWeight(5);
            textFont("Silkscreen");
            text("YAY!! CONGRATS!", 62, 151);
            health = 2001;
            if (ghost.isTouching(coin)) {
              playSound("assets/category_alerts/vibrant_game_rigning_alert_1.mp3", false);
              playSound("assets/category_male_voiceover/you_win_male.mp3", false);
            }
            if (ghost.isTouching(spike || Spike)) {
              ghost.rotationSpeed = 5;
            } else {
              ghost.setAnimation("ghost VICTORY");
              spike.setAnimation("spike guyvictory");
              stopSound("assets/category_background/outback.mp3");
              spike.velocityY = Spike.velocityY;
              Spike.velocityX = spike.velocityX;
              spike.velocityX = 0;
              Spike.velocityY = 0;
            }
          }
          drawSprites();
          if (health < 1) {
            spike.x = ghost.x;
            spike.y = ghost.y;
            spike.visible = ghost.visible;
            ghost.visible = 0;
            coin.visible = 0;
            Spike.visible = 0;
            spike.visible = 0;
            potion.visible = 0;
            coingauge.visible = 0;
            background("black");
            fill("black");
            stroke("white");
            textSize(56);
            strokeWeight(5);
            textFont("Silkscreen");
            text("GAME OVER", 0, 146);
            health = -7;
            if (health == -7) {
              ghostdeath.setAnimation("SOULDEATH");
              ghostdeath.x = 190;
              ghostdeath.y = 260;
              drawSprites();
              health = -8;
            }
          }
    } else {
    if (NORMAL == 1) {
        stopSound("assets/category_background/wavering_wind.mp3");
        music = music + 1;
        if (music == 1) {
          playSound("assets/category_background/outback.mp3", true);
          music = music + 1;
        }
        ghost.visible = 1;
        spike.visible = 1;
        coin.visible = 1;
        if (ghost.isTouching(coin)) {
  points = points + 1;
  COIN = COIN + 1;
  coin.x = randomNumber(1, 400);
  coin.y = randomNumber(400, 1);
  playSound("assets/category_retro/retro_game_ui_select_4.mp3", false);
  var sec = sec + 1;
  if (COIN > 98) {
        stopSound("assets/category_background/outback.mp3");
        coin.setAnimation("specialcoin");
        if (COIN == 100) {
          playSound("assets/CONGRATS!.mp3", false);
          playSound("assets/category_alerts/vibrant_game_rigning_alert_1.mp3", false);
          playSound("assets/category_male_voiceover/you_win_male.mp3", false);
          coin.x = ghost.x;
          coin.y = ghost.y;
        }
  }

        }
        if (keyDown("j")) {
  J.visible = 1;
  playSpeech("very scary", "female", "English");
  playSound("assets/category_instrumental/digital_drum_repeating.mp3", false);
  playSound("assets/GAME OVER-2.mp3", false);
        } else {
  J.visible = 0;
  stopSound("assets/GAME OVER-2.mp3");
  stopSound("assets/category_instrumental/digital_drum_repeating.mp3");
        }
        background("black");
        text("Points: " + points, 25, 25);
        text("Coins collected: " + COIN, 25, 44);
        if(keyDown("up") || keyDown("w")) {
  ghost.y = ghost.y - 5;
        }
        if(keyDown("down") || keyDown("s")) {
  ghost.y = ghost.y + 5;
        }
        if(keyDown("left") || keyDown("a")) {
  ghost.x = ghost.x - 5;
        }
        if(keyDown("right") || keyDown("d")) {
  ghost.x = ghost.x + 5;
        }
        if (mouseDown("leftButton") || keyDown("space")) {
        if (COIN > 99) {
          SWORD.pause();
        } else {
          if (health < 0) {
          SWORD.visible = 0;
          } else {
          SWORD.play();
          SWORD.visible = 1;
          SWORD.x = ghost.x;
          SWORD.y = ghost.y;
          SWORD.pointTo(World.mouseX, World.mouseY);
          }
        }
        } else {
  SWORD.visible = 0;
  SWORD.x = 700;
        }
        if (1 > points) {
  textSize(27);
  text("GET 100 COINS TO WIN!", 47, 320);
        }
        if (spike.isTouching(ghost)) {
  ghost.setAnimation("ghost dmage");
  if (health > -1) {
        playSound("assets/category_retro/retro_game_twinkly_pickup_2.mp3", false);
  } else {
        text("GAME OVER", 121, 146);
  }
  health = health - 1;
  spike.x = 2;
  spike.y = randomNumber(1, 290);
  if (health == 0) {
        ghost.setAnimation("ghost dmage 2");
  }
  if (health == -1) {
        stopSound("assets/category_background/outback.mp3");
        playSound("assets/GAME OVER.mp3", false);
        playSound("assets/idk.mp3", false);
        playSound("assets/idk2.mp3", false);
        spike.x = ghost.x;
        spike.y = ghost.y;
  }
        } else {
  spike.velocityX = 4;
  if (388 < spike.x) {
        spike.x = 2;
        spike.y = randomNumber(1, 290);
  }
        }
        if (SWORD.isTouching(spike)) {
  playSound("assets/category_retro/retro_game_click.mp3", false);
  spike.x = 2;
  spike.y = randomNumber(1, 290);
  points = points + 1;
        }
        if (SWORD.isTouching(Spike)) {
  playSound("assets/category_retro/retro_game_click.mp3", false);
  Spike.y = 365;
  Spike.x = randomNumber(1, 290);
  points = points + 1;
        }
        if (points > 10) {
  spike.velocityX = 5;
        }
        if (points > 20) {
  spike.velocityX = 6;
        }
        if (points > 30) {
  spike.velocityX = 7;
        }
        if (points > 35) {
  var Posion = 0;
  spike.velocityX = 7.2;
  Spike.velocityY = -3;
  potion.scale = 0.1;
  potion.visible = 1;
  if (potion.isTouching(ghost)) {
        playSound("assets/category_achievements/peaceful_win_2.mp3", false);
        Posion = 0;
        ghost.velocityX = 0;
        ghost.velocityY = 0;
        if (health == 2) {
          ghost.setAnimation("ghost");
        }
        if (health == 1) {
          ghost.setAnimation("ghost dmage");
        }
        if (health == 0) {
          ghost.setAnimation("ghost dmage 2");
        }
        potion.x = randomNumber(1, 200);
        potion.y = randomNumber(1, 400);
  }
  if (Spike.y < 5) {
        Spike.y = 365;
        Spike.x = randomNumber(1, 290);
  }
  if (Spike.isTouching(ghost)) {
        playSound("assets/category_collect/collect_item_bling_4.mp3", false);
        if (health == 2) {
          ghost.setAnimation("poison ghost");
          ghost.velocityY = 0.5;
          ghost.velocityX = 1;
          Posion = Posion + 1;
        } else {
          if (health == 1) {
            ghost.setAnimation("poison ghost");
            Posion = Posion + 1;
            ghost.velocityY = Posion;
            ghost.velocityX = Posion;
            ghost.setAnimation("poison ghost1 ");
          } else {
            if (health == 0) {
              Posion = Posion + 2;
              ghost.setAnimation("poison ghost down bad");
              ghost.velocityY = Posion + 1.5;
              ghost.velocityX = Posion;
            }
          }
        }
  }
        }
        if (points > 40) {
  spike.velocityX = 7.5;
        }
        if (points > 50) {
  spike.velocityX = 8;
        }
        if (points > 60) {
  spike.velocityX = 8.7;
        }
        if (points > 70) {
  spike.velocityX = 9.5;
        }
        if (points > 80) {
  spike.velocityX = 10;
        }
        if (points > 90) {
  spike.velocityX = 14;
        }
        if (points > 100) {
  spike.velocityX = 20;
        }
        if (COIN > 1) {
  coingauge.setAnimation("PartialcoinGauge");
        }
        if (COIN > 2) {
  coingauge.setAnimation("lilmorecoinGauge");
        }
        if (COIN == 4) {
  coingauge.setAnimation("halfcoinGauge");
        }
        if (COIN == 5) {
  coingauge.setAnimation("morehalfcoinGauge");
        }
        if (COIN == 6) {
  coingauge.setAnimation("morehalfcoinGauge");
        }
        if (COIN == 7) {
  coingauge.setAnimation("almostfullcoinGauge");
        }
        if (COIN == 8) {
  coingauge.setAnimation("FullcoinGauge");
  if (keyWentDown("c")) {
        playSound("assets/category_pop/vibrant_game_vanishing_item_1.mp3", false);
        coingauge.setAnimation("ACTIVATEDGAUGE");
  }
        }
        //I mean all the coding is fine but animations off...WHY CODE.ORG?? 
        //WHY DO YOU HAVE TO BE SO TERRIBLE??
        if (COIN > 99) {
  background("black");
  fill("black");
  stroke("white");
  textSize(26);
  strokeWeight(5);
  textFont("Silkscreen");
  text("YAY!! CONGRATS!", 62, 151);
  health = 2001;
        if (mouseWentDown("leftButton") || keyWentDown("space")) {
          ghost.x = World.mouseX;
          ghost.y = World.mouseY;
        }
  if (ghost.isTouching(coin)) {
        playSound("assets/category_alerts/vibrant_game_rigning_alert_1.mp3", false);
        playSound("assets/category_male_voiceover/you_win_male.mp3", false);
  }
  if (ghost.isTouching(spike || Spike)) {
        ghost.rotationSpeed = 5;
  } else {
        ghost.setAnimation("ghost VICTORY");
        spike.setAnimation("spike guyvictory");
        stopSound("assets/category_background/outback.mp3");
        spike.velocityY = Spike.velocityY;
        Spike.velocityX = spike.velocityX;
        spike.velocityX = 0;
        Spike.velocityY = 0;
  }
        }
        drawSprites();
        if (health < 0) {
  spike.x = ghost.x;
  spike.y = ghost.y;
  spike.visible = ghost.visible;
  ghost.visible = 0;
  coin.visible = 0;
  Spike.visible = 0;
        spike.visible = 0;
  potion.visible = 0;
  coingauge.visible = 0;
  background("black");
  fill("black");
  stroke("white");
  textSize(56);
  strokeWeight(5);
  textFont("Silkscreen");
  text("GAME OVER", 0, 146);
  health = -7;
  if (health == -7) {
        ghostdeath.setAnimation("SOULDEATH");
        ghostdeath.x = 190;
        ghostdeath.y = 260;
        drawSprites();
        health = -8;
  }
        }
    }
    }
  } else {
    if (START == 0) {
      background("black");
      textSize(35);
      stroke("red");
      text("COIN GAME", 70, 142);
      textSize(22);
      text("(Press mouse to start)", 110, 280);
      if (mouseWentDown("leftButton")) {
        options = options+1;
      }
      if (options == 0) {
        playSound("assets/category_hits/8bit_splat.mp3", false);
        options = options+1;
      }
      if (options > -1) {
        background("black");
        HARD.visible = 1;
        EASY.visible = 1;
        HARD.scale = 0.3;
        EASY.scale = 0.3;
        
        if (mouseIsOver(EASY)) {
          text("Normal mode", 150, 240);
        }
        if (mouseIsOver(HARD)) {
          text("Hard mode", 150, 240);
          if (mousePressedOver(HARD)) {
            HARDMODE = 1;
            START = 1;
            HARD.visible = 0;
            EASY.visible = 0;
            
          }
        }
        if (mousePressedOver(EASY)) {
          START = 1;
          NORMAL = 1;
          HARD.visible = 0;
          EASY.visible = 0;
          
        }
        
        ghost.visible = 0;
        spike.visible = 0;
        coin.visible = 0;
        drawSprites();
      }
    }
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
