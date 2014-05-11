$(function(){

  // Game Settings
  var seenIntro, player1, player2, players, playerCharacters,
      maxLife, roundStarted, attackingLifePoints;

  // if false, shows intro screen before menu
  // will be set to true after intro has run it's course
  seenIntro = false;

  // Helpful variable to check if we're in game
  roundStarted = false;

  // Maximum player life
  maxLife = 100;

  // Amount of life a player loses when attacked
  attackingLifePoints = 10;

  // Character Objects
  var billeh, thefuzz, jessbian, jamus, aj, manhands, nads, em, thabbo;
  billeh = {};
    billeh.id = "billeh";
    billeh.name = "Billeh";
    billeh.weapon = "Frying Pan";
    billeh.idle = "images/characters/billeh/idle.png";
    billeh.attack = "images/characters/billeh/attack.png";
    billeh.hurt = "images/characters/billeh/hurt.png";
    billeh.death1 = "images/characters/billeh/death1.png";
    billeh.death2 = "images/characters/billeh/death2.png";
  thefuzz = {};
    thefuzz.id = "thefuzz";
    thefuzz.name = "Fuzz";
    thefuzz.weapon = "Mace";
    thefuzz.idle = "images/characters/thefuzz/idle.png";
    thefuzz.attack = "images/characters/thefuzz/attack.png";
    thefuzz.hurt = "images/characters/thefuzz/hurt.png";
    thefuzz.death1 = "images/characters/thefuzz/death1.png";
    thefuzz.death2 = "images/characters/thefuzz/death2.png";
  jessbian = {};
    jessbian.id = "jessbian";
    jessbian.name = "Gunn";
    jessbian.weapon = "Gun Sword";
    jessbian.idle = "images/characters/gunn/idle.png";
    jessbian.attack = "images/characters/gunn/attack.png";
    jessbian.hurt = "images/characters/gunn/hurt.png";
    jessbian.death1 = "images/characters/gunn/death1.png";
    jessbian.death2 = "images/characters/gunn/death2.png";
  jamus = {};
    jamus.id = "jamus";
    jamus.name = "Jamus";
    jamus.weapon = "Buster Sword";
    jamus.idle = "images/characters/jamus/idle.png";
    jamus.attack = "images/characters/jamus/attack.png";
    jamus.hurt = "images/characters/jamus/hurt.png";
    jamus.death1 = "images/characters/billeh/death1.png";
    jamus.death2 = "images/characters/billeh/death2.png";
  aj = {};
    aj.id = "aj";
    aj.name = "AJ";
    aj.weapon = "Gun Arm";
    aj.idle = "images/characters/aj/idle.png";
    aj.attack = "images/characters/aj/attack.png";
    aj.hurt = "images/characters/aj/hurt.png";
    aj.death1 = "images/characters/aj/death1.png";
    aj.death2 = "images/characters/aj/death2.png";
  manhands = {};
    manhands.id = "manhands";
    manhands.name = "Manhands";
    manhands.weapon = "Boxing Gloves";
    manhands.idle = "images/characters/billeh/idle.png";
    manhands.attack = "images/characters/billeh/attack.png";
    manhands.hurt = "images/characters/billeh/hurt.png";
    manhands.death1 = "images/characters/billeh/death1.png";
    manhands.death2 = "images/characters/billeh/death2.png";
  nads = {};
    nads.id = "nads";
    nads.name = "Nads";
    nads.weapon = "Whip";
    nads.idle = "images/characters/billeh/idle.png";
    nads.attack = "images/characters/billeh/attack.png";
    nads.hurt = "images/characters/billeh/hurt.png";
    nads.death1 = "images/characters/billeh/death1.png";
    nads.death2 = "images/characters/billeh/death2.png";
  em = {};
    em.id = "em";
    em.name = "Em";
    em.weapon = "Rapier";
    em.idle = "images/characters/billeh/idle.png";
    em.attack = "images/characters/billeh/attack.png";
    em.hurt = "images/characters/billeh/hurt.png";
    em.death1 = "images/characters/billeh/death1.png";
    em.death2 = "images/characters/billeh/death2.png";
  thabbo = {};
    thabbo.id = "thabbo";
    thabbo.name = "Thabbo";
    thabbo.weapon = "Barrel";
    thabbo.idle = "images/characters/billeh/idle.png";
    thabbo.attack = "images/characters/billeh/attack.png";
    thabbo.hurt = "images/characters/billeh/hurt.png";
    thabbo.death1 = "images/characters/billeh/death1.png";
    thabbo.death2 = "images/characters/billeh/death2.png";
  fabbian = {};
    fabbian.id = "fabbian";
    fabbian.name = "Fabbian";
    fabbian.weapon = "Guitar";
    fabbian.idle = "images/characters/billeh/idle.png";
    fabbian.attack = "images/characters/billeh/attack.png";
    fabbian.hurt = "images/characters/billeh/hurt.png";
    fabbian.death1 = "images/characters/billeh/death1.png";
    fabbian.death2 = "images/characters/billeh/death2.png";

  // All characters in an array
  var characters = [billeh, thefuzz, jessbian, jamus, aj, manhands, nads, em, thabbo];

  // Levels
  var gameLevel = "01";

  // Blank Character Image
  var blankCharacter = "images/characters/blank.png";

  // Player objects
  var defaultCharacter = billeh;
  player1 = {}
    player1.nice_name = "Player 1";
    player1.playingAs = defaultCharacter;
    player1.playerLife = 100;
    player1.playerLifeBar = $("#round__player1Life");
    player1.character = $("#round__player1Character");
    player1.attackButton = $("#round__player1Attack");
    player1.timeout = "";
  player2 = {}
    player2.nice_name = "Player 2";
    player2.playingAs = defaultCharacter;
    player2.playerLife = 100;
    player2.playerLifeBar = $("#round__player2Life");
    player2.character = $("#round__player2Character");
    player2.attackButton = $("#round__player2Attack");
    player2.timeout = "";
  players = [player1,player2];
  playerCharacters = $(".sc-round--character");

  // Game Timer
  var gameTimer = {}
    gameTimer.roundTime = 99;
    gameTimer.time = 0;
    gameTimer.timeout = "";
    gameTimer.element = $("#round__timer");
    gameTimer.update = function(){
      gameTimer.element.text(gameTimer.time);
    }
    gameTimer.start = function(){
      gameTimer.timeout = setTimeout(function(){
        gameTimer.time--;
        gameTimer.update();
        if(gameTimer.time <= 0) {
          // TODO: draw status
          if( player1.playerLife <= player2.playerLife ) {
            gameOver(player2);
          } else {
            gameOver(player1);
          }
        } else {
          gameTimer.start();
        }
      }, 1000);
    }
    gameTimer.pause = function(){
      clearTimeout(gameTimer.timeout);
    }
    gameTimer.stop = function(){
      clearTimeout(gameTimer.timeout);
    }

  // Game DOM Elements
  var gameScreens, scIntro, scMainMenu, scInGame, scGameOver, scCharacterSelect;
  gameScreens = $(".game__screen");
  scIntro = $("#game__intro");
  scMainMenu = $("#game__main-menu");
  scCharacterSelect = $("#game__character-select");
  scLevelSelect = $("#game__level-select");
  scInGame = $("#game__playing");
  scGameOver = $("#game__game-over");

  // Overlays
  var overlays, overlayGameOver;
  overlays = $(".overlay");
  overlayGameOver = $("#overlay__game-over");
  overlayPause = $("#overlay__paused");

  // CSS Classes
  var hurtPlayerClass = "sc-round--character__blink";
  var characterActiveTileClass = "selected";
  var currentPlayerActiveClass = "character--player__active";

  // --------------------------------------------------------------
  //
  // GENERAL HELPER FUNCTIONS
  //
  // --------------------------------------------------------------

  // Transition to a scene
  var transitionToScene = function(scene) {
    roundStarted = false;
    gameScreens.css("z-index", "1").hide();
    scene.css("z-index", "2").fadeIn();
  }

  // Hide all overlays
  var hideOverlays = function() {
    overlays.hide();
  }

  // Show an Overlay
  var showOverlay = function(overlay){
    hideOverlays();
    overlay.show();
  }

  // Get other player character
  var getOtherPlayer = function(player) {
    if(player==player1) {
      return player2;
    } else {
      return player1;
    }
  }

  // --------------------------------------------------------------
  //
  // INTRO
  //
  // --------------------------------------------------------------

  var startIntro = function(){

    // create an array of all images required
    var imagesToPreload = [];
    $.each(characters, function(){
      imagesToPreload.push(this.idle);
      imagesToPreload.push(this.attack);
      imagesToPreload.push(this.hurt);
      imagesToPreload.push(this.death1);
      imagesToPreload.push(this.death2);
    });
    imagesToPreload.push("images/backgrounds/map.jpg");
    imagesToPreload.push("images/backgrounds/01.jpg");
    var totalImagesToPreload = imagesToPreload.length;

    // Update progress bar with zero counter
    var $preloadBar = scIntro.find("progress");
    $preloadBar.attr("max", totalImagesToPreload);

    // transition to intro
    transitionToScene(scIntro);

    // preload images
    $.each(imagesToPreload, function(i){
      thisImage = i + 1;
      $preloadBar.attr("value", thisImage);
      var $loadingImage = $("<img />").attr("src", this);
      $loadingImage.on("load", function(){
        if( (i+1) == totalImagesToPreload ) {
          startMainMenu();
        }
      });
    });

  }

  // --------------------------------------------------------------
  //
  // MAIN MENU
  //
  // --------------------------------------------------------------

  var mainMenuLeft = $("#main__character1 img");
  var mainMenuRight = $("#main__character2 img");

  var getRandomCharacter = function(){
    return characters[Math.floor(Math.random()*characters.length)];
  }

  $("#main__playBtn").on("click", function(e){
    e.preventDefault();
    startCharacterSelect();
  });

  var startMainMenu = function(){

    // load in character faces
    var leftCharacter = getRandomCharacter();
    var rightCharacter = getRandomCharacter();
    mainMenuLeft.attr("src",leftCharacter.idle);
    mainMenuRight.attr("src",rightCharacter.idle);

    // transition to
    transitionToScene(scMainMenu);
  }

  // --------------------------------------------------------------
  //
  // CHARACTER SELECT
  //
  // --------------------------------------------------------------

  // Select screen DOM elements
  var $selectFace, $selectName, $selectWeapon, $player1Label, $player2Label,
      $select_backButton, $select_fightButton, $selectCharacterButtons;
  $selectedFace = $("#character__face");
  $selectedName = $("#character__name");
  $selectedWeapon = $("#character__weapon");
  $player1Label = $("#character__player1");
  $player2Label = $("#character__player2");
  $selected_backButton = $("#character__backBtn");
  $selected_fightButton = $("#character__fightBtn");
  $selectCharacterButtons = $("#character__grid > div");

  // Select screen variables
  var currentPlayer = player1;

  // Set a player's character
  var setPlayerCharacter = function(player, character) {
    player.playingAs = character;
  }

  // Update character details on page with new name, weapon and face
  var selectCharacterDetails = function(player) {
    // update face
    $selectedFace.parent().addClass("transitioning");
    $selectedName.addClass("transitioning");
    $selectedWeapon.addClass("transitioning");
    setTimeout(function(){
      $selectedFace.attr("src", player.playingAs.idle);
      $selectedFace.parent().removeClass("transitioning");
    }, 200);
    setTimeout(function(){
      $selectedName.text(player.playingAs.name);
      $selectedName.removeClass("transitioning");
    }, 200);
    setTimeout(function(){
      $selectedWeapon.text(player.playingAs.weapon);
      $selectedWeapon.removeClass("transitioning");
    }, 200);
  }

  // Change the player you're selecting the character for
  var setCurrentPlayer = function(player){
    if(player == player1) {
      $player2Label.removeClass(currentPlayerActiveClass);
      $player1Label.addClass(currentPlayerActiveClass);
    } else {
      $player1Label.removeClass(currentPlayerActiveClass);
      $player2Label.addClass(currentPlayerActiveClass);
    }
    // update variable of current player
    currentPlayer = player;
    // update visual details on page
    selectCharacterDetails(player);
    // update character grid to reflect selected character
    var $newTile = $selectCharacterButtons.filter("[data-character='"+currentPlayer.playingAs.id+"']");
    updateCharacterTiles($newTile);
  }

  // Clicking on the player labels updates the player
  $player1Label.on("click", function(){
    // abort if already selected
    if($player1Label.hasClass(currentPlayerActiveClass)) {
      return false;
    }
    // update character displays
    setCurrentPlayer(player1);
  });
  $player2Label.on("click", function(){
    // abort if already selected
    if($player2Label.hasClass(currentPlayerActiveClass)) {
      return false;
    }
    // update character displays
    setCurrentPlayer(player2);
  });

  // Update character details when clicking on a face
  var updateCharacterTiles = function(tile) {
    // get associated character object
    var newCharacter = eval(tile.data("character"));
    // visual update of class
    tile.addClass(characterActiveTileClass).siblings().removeClass(characterActiveTileClass);
    setPlayerCharacter(currentPlayer,newCharacter);
    selectCharacterDetails(currentPlayer,newCharacter);
  }
  $selectCharacterButtons.on("click", function(e){
    e.preventDefault();
    var $thisCharacterTile = $(this);
    if($thisCharacterTile.data("character") == currentPlayer.playingAs.id) {
      return false;
    }
    updateCharacterTiles($thisCharacterTile);
  });

  // Start character select screen
  var startCharacterSelect = function() {

    // load in the on-screen details
    setCurrentPlayer(player1);
    selectCharacterDetails(currentPlayer);

    // transition to scene
    transitionToScene(scCharacterSelect);
  }

  // Fight button
  $selected_fightButton.on("click", function(){
    startLevelSelect();
  });

  // Back button
  $selected_backButton.on("click", function(){
    startMainMenu();
  });

  // --------------------------------------------------------------
  //
  // LEVEL SELECT SCREEN
  //
  // --------------------------------------------------------------

  var $levelSelectTiles = $(".sc-level--tile");

  var setLevel = function(level){
    gameLevel = "/images/levels/" + level + ".jpg";
  }

  var startLevelSelect = function(){
    transitionToScene(scLevelSelect);
  }

  // Clicking on a level button
  $levelSelectTiles.on("click", function(e){
    e.preventDefault();
    var $thisLevelTile = $(this);
    $thisLevelTile.addClass("selected").siblings().removeClass("selected");
    setLevel($thisLevelTile.data("level"));
  });

  // Back button
  $("#levels__backBtn").on("click", function(e){
    e.preventDefault();
    startCharacterSelect();
  });

  // Fight button
  $("#levels__fightBtn").on("click", function(e){
    e.preventDefault();
    startRound();
  });

  // --------------------------------------------------------------
  //
  // GAME OVER SCREEN
  //
  // --------------------------------------------------------------

  // Set GameOver, declaring the winner
  var gameOver = function(winner){
    // Play Loser Animation
    var loser = getOtherPlayer(winner);
    updateCharacterSprite(loser, loser.playingAs.death1);
    clearTimeout(loser.timeout);
    loser.character.removeClass(hurtPlayerClass);
    loser.timeout =  setTimeout(function(){
      updateCharacterSprite(loser, loser.playingAs.death2);
    }, 300);
    // Show game over screen
    $("#game__game-over--winner").text(winner.nice_name);
    showOverlay(overlayGameOver);
    // Stop timer
    gameTimer.stop();
  }

  // Play again button
  $("#game__game-over--play-again").on("click", function(e){
    e.preventDefault();
    hideOverlays();
    startRound();
  });

  // Return to character select
  $("#game__game-over--characters").on("click", function(e){
    e.preventDefault();
    hideOverlays();
    startCharacterSelect();
  });

  // --------------------------------------------------------------
  //
  // IN-GAME
  //
  // --------------------------------------------------------------

  // Check if the game should be over or not
  var checkGameStatus = function(){
    // check for draw
    if( player1.playerLife <= 0 && player2.playerLife <= 0 ) {
      // TODO: Draw status
      gameOver(player1);
    } else {
      // Set Winner
      if( player1.playerLife <= 0 ) {
        // gameOver("Player 2");
        gameOver(player2);
      } else if ( player2.playerLife <= 0 ) {
        // gameOver("Player 1");
        gameOver(player1);
      }
    }
  }

  // Update player life bars
  var updatePlayerLifeBars = function(){
    player1.playerLifeBar.val(player1.playerLife).attr("max", maxLife);
    player2.playerLifeBar.val(player2.playerLife).attr("max", maxLife);
    checkGameStatus();
  }

  // Update character sprite
  var updateCharacterSprite = function(player, sprite) {
    player.character.attr("src", sprite);
  }

  // Pause game
  var pauseGame = function(){
    gameTimer.pause();
    showOverlay(overlayPause);
  }

  // Unpause game
  var unpauseGame = function(){
    gameTimer.start();
    hideOverlays();
  }

  $("#overlay__paused--resume").on("click", function(e){
    e.preventDefault();
    unpauseGame();
  });

  $("#overlay__paused--exit").on("click", function(e){
    e.preventDefault();
    startCharacterSelect();
    hideOverlays();
  });

  $("#round__pause").on("click", function(e){
    e.preventDefault();
    pauseGame();
  });

  // Player attacks another player
  var playerAttack = function(attackingPlayer) {
    hurtPlayer = getOtherPlayer(attackingPlayer);
    attackingPlayer.character.css("z-index", "2");
    hurtPlayer.character.css("z-index", "1");
    // Player attack animation
    clearTimeout(attackingPlayer.timeout);
    updateCharacterSprite(attackingPlayer, attackingPlayer.playingAs.attack);
    attackingPlayer.timeout = setTimeout(function(){
      updateCharacterSprite(attackingPlayer, attackingPlayer.playingAs.idle);
    }, 200);
    // Player hurt animation
    clearTimeout(hurtPlayer.timeout);
    updateCharacterSprite(hurtPlayer, hurtPlayer.playingAs.hurt);
    hurtPlayer.character.addClass(hurtPlayerClass);
    hurtPlayer.timeout = setTimeout(function(){
      hurtPlayer.character.removeClass(hurtPlayerClass);
      updateCharacterSprite(hurtPlayer, hurtPlayer.playingAs.idle);
    }, 500);
    // Change health to reflect
    hurtPlayer.playerLife = hurtPlayer.playerLife - attackingLifePoints;
    updatePlayerLifeBars();
  }

  // Attack button actions
  player1.attackButton.on("click", function(e){
    e.preventDefault();
    playerAttack(player1);
  });
  player2.attackButton.on("click", function(e){
    e.preventDefault();
    playerAttack(player2);
  });

  // Starting a round
  // reset some variables why don't you?
  var startRound = function(){

    // set game timer
    gameTimer.time = gameTimer.roundTime;
    gameTimer.update();
    gameTimer.start();

    // reset player variables
    player1.playerLife = 100;
    player2.playerLife = 100;
    player1.playerLifeBar.attr("data-name", player1.playingAs.name);
    player2.playerLifeBar.attr("data-name", player2.playingAs.name);
    updatePlayerLifeBars();

    // set idle frames by default
    updateCharacterSprite(player1, player1.playingAs.idle);
    updateCharacterSprite(player2, player2.playingAs.idle);

    // update background
    var $levelBackground = $("#game__playing");
    $levelBackground.css("background-image", gameLevel);

    // show the appropriate pane
    transitionToScene(scInGame);
    roundStarted = true;

  }


  // --------------------------------------------------------------
  //
  // START GAME
  //
  // --------------------------------------------------------------

  startIntro();
  // startMainMenu();
  // startCharacterSelect();
  // startLevelSelect();
  // startRound();

});