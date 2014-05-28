$(function(){

  // Game Settings
  var seenIntro, player1, player2, players, playerCharacters,
      maxLife, roundStarted, attackingLifePoints, gameMode, levelPath,
      debug;

  // debug mode
  debug = true;

  // if false, shows intro screen before menu
  // will be set to true after intro has run it's course
  seenIntro = false;

  // Helpful variable to check if we're in game
  roundStarted = false;

  // Maximum player life
  maxLife = 100;

  // Default game mode
  gameMode = "twoPlayer";

  // Path for level images
  levelPath = "images/backgrounds/";

  // Amount of life a player loses when attacked
  attackingLifePoints = 10;

  // Character Objects
  var billeh, thefuzz, jessbian, jamus, aj, manhands, nads, em, thabbo, fabbian;
  billeh = {};
    billeh.id = "billeh";
    billeh.name = "Billeh";
    billeh.weapon = "Frying Pan";
    billeh.idle = "images/characters/billeh/billeh_idle.svg";
    billeh.idle2 = "images/characters/billeh/billeh_idle2.svg";
    billeh.attack = "images/characters/billeh/billeh_attack.svg";
    billeh.hurt = "images/characters/billeh/billeh_hurt.svg";
    billeh.death1 = "images/characters/billeh/billeh_death1.svg";
    billeh.death2 = "images/characters/billeh/billeh_death2.svg";
    billeh.locked = false;
  thefuzz = {};
    thefuzz.id = "thefuzz";
    thefuzz.name = "Fuzz";
    thefuzz.weapon = "Mace";
    thefuzz.idle = "images/characters/billeh/billeh_idle.svg";
    thefuzz.idle2 = "images/characters/billeh/billeh_idle2.svg";
    thefuzz.attack = "images/characters/billeh/billeh_attack.svg";
    thefuzz.hurt = "images/characters/billeh/billeh_hurt.svg";
    thefuzz.death1 = "images/characters/billeh/billeh_death1.svg";
    thefuzz.death2 = "images/characters/billeh/billeh_death2.svg";
    thefuzz.locked = false;
  jessbian = {};
    jessbian.id = "jessbian";
    jessbian.name = "Gunn";
    jessbian.weapon = "Gun Sword";
    jessbian.idle = "images/characters/gunn/gunn_idle.svg";
    jessbian.idle2 = "images/characters/gunn/gunn_idle.svg";
    jessbian.attack = "images/characters/gunn/gunn_attack.svg";
    jessbian.hurt = "images/characters/gunn/gunn_hurt.svg";
    jessbian.death1 = "images/characters/gunn/gunn_death1.svg";
    jessbian.death2 = "images/characters/gunn/gunn_death2.svg";
    jessbian.locked = false;
  jamus = {};
    jamus.id = "jamus";
    jamus.name = "Jamus";
    jamus.weapon = "Buster Sword";
    jamus.idle = "images/characters/billeh/billeh_idle.svg";
    jamus.idle2 = "images/characters/billeh/billeh_idle2.svg";
    jamus.attack = "images/characters/billeh/billeh_attack.svg";
    jamus.hurt = "images/characters/billeh/billeh_hurt.svg";
    jamus.death1 = "images/characters/billeh/billeh_death1.svg";
    jamus.death2 = "images/characters/billeh/billeh_death2.svg";
    jamus.locked = true;
  aj = {};
    aj.id = "aj";
    aj.name = "AJ";
    aj.weapon = "Gun Arm";
    aj.idle = "images/characters/billeh/billeh_idle.svg";
    aj.idle2 = "images/characters/billeh/billeh_idle2.svg";
    aj.attack = "images/characters/billeh/billeh_attack.svg";
    aj.hurt = "images/characters/billeh/billeh_hurt.svg";
    aj.death1 = "images/characters/billeh/billeh_death1.svg";
    aj.death2 = "images/characters/billeh/billeh_death2.svg";
    aj.locked = true;
  manhands = {};
    manhands.id = "manhands";
    manhands.name = "Manhands";
    manhands.weapon = "Boxing Gloves";
    manhands.idle = "images/characters/billeh/billeh_idle.svg";
    manhands.idle2 = "images/characters/billeh/billeh_idle2.svg";
    manhands.attack = "images/characters/billeh/billeh_attack.svg";
    manhands.hurt = "images/characters/billeh/billeh_hurt.svg";
    manhands.death1 = "images/characters/billeh/billeh_death1.svg";
    manhands.death2 = "images/characters/billeh/billeh_death2.svg";
    manhands.locked = true;
  nads = {};
    nads.id = "nads";
    nads.name = "Nads";
    nads.weapon = "Whip";
    nads.idle = "images/characters/billeh/billeh_idle.svg";
    nads.idle2 = "images/characters/billeh/billeh_idle2.svg";
    nads.attack = "images/characters/billeh/billeh_attack.svg";
    nads.hurt = "images/characters/billeh/billeh_hurt.svg";
    nads.death1 = "images/characters/billeh/billeh_death1.svg";
    nads.death2 = "images/characters/billeh/billeh_death2.svg";
    nads.locked = true;
  em = {};
    em.id = "em";
    em.name = "Em";
    em.weapon = "Rapier";
    em.idle = "images/characters/billeh/billeh_idle.svg";
    em.idle2 = "images/characters/billeh/billeh_idle2.svg";
    em.attack = "images/characters/billeh/billeh_attack.svg";
    em.hurt = "images/characters/billeh/billeh_hurt.svg";
    em.death1 = "images/characters/billeh/billeh_death1.svg";
    em.death2 = "images/characters/billeh/billeh_death2.svg";
    em.locked = true;
  thabbo = {};
    thabbo.id = "thabbo";
    thabbo.name = "Thabbo";
    thabbo.weapon = "Barrel";
    thabbo.idle = "images/characters/billeh/billeh_idle.svg";
    thabbo.idle2 = "images/characters/billeh/billeh_idle2.svg";
    thabbo.attack = "images/characters/billeh/billeh_attack.svg";
    thabbo.hurt = "images/characters/billeh/billeh_hurt.svg";
    thabbo.death1 = "images/characters/billeh/billeh_death1.svg";
    thabbo.death2 = "images/characters/billeh/billeh_death2.svg";
    thabbo.locked = true;
  fabbian = {};
    fabbian.id = "fabbian";
    fabbian.name = "Fabbian";
    fabbian.weapon = "Guitar";
    fabbian.idle = "images/characters/billeh/billeh_idle.svg";
    fabbian.idle2 = "images/characters/billeh/billeh_idle2.svg";
    fabbian.attack = "images/characters/billeh/billeh_attack.svg";
    fabbian.hurt = "images/characters/billeh/billeh_hurt.svg";
    fabbian.death1 = "images/characters/billeh/billeh_death1.svg";
    fabbian.death2 = "images/characters/billeh/billeh_death2.svg";
    fabbian.locked = true;

  // All characters in an array
  var characters = [billeh, thefuzz, jessbian, jamus, aj, manhands, nads, em, thabbo, fabbian];

  // Levels
  var gameLevel = levelPath + "01.svg";

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
  var gameScreens, scIntro, scMainMenu, scVersus, scInGame, scGameOver, scCharacterSelect;
  gameScreens = $(".game__screen");
  scIntro = $("#game__intro");
  scMainMenu = $("#game__main-menu");
  scCharacterSelect = $("#game__character-select");
  scLevelSelect = $("#game__level-select");
  scVersus = $("#game__vs");
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

  // debug function
  var debug = function(text){
    if(debug) {
      console.log(text);
    }
  }

  // --------------------------------------------------------------
  //
  // LOCKING AND UNLOCKING OF CHARACTERS
  //
  // --------------------------------------------------------------
  var unlockedCharacters = [];
  var lockedCharacters = [];

  // Load unlocked characters from localStorage
  var unlockCharactersFromLocalStorage = function(){
    if(localStorage.unlockedCharacters) {
      $.each(JSON.parse(localStorage.getItem('unlockedCharacters')), function(){
        var character = eval(this);
        $.map( characters, function( real_character, i ) {
          if(character.id == real_character.id) {
            real_character.locked = false;
          }
        })
        debug("unlocking from localStorage: " + character.name);
      });
    }
  }

  // Create new storage area if nothing exists
  if(!localStorage.unlockedCharacters) {
    debug("no storage found, creating new storage area.");
    localStorage.setItem("unlockedCharacters", JSON.stringify(unlockedCharacters));
  } else {
    debug("storage found. getting unlocked characters from storage");
  }

  var generateUnlockedCharacters = function(){
    // reset arrays
    unlockedCharacters = [];
    lockedCharacters = [];
    unlockCharactersFromLocalStorage();
    // loop through each character and assign to either array
    $.each(characters, function(){
      var character = this;
      debug("checking if character should be unlocked: " + character.name + ", Locked: " + character.locked );
      if(character.locked == false){
        unlockedCharacters.push(character);
      } else {
        lockedCharacters.push(character);
      }
    });
    // update local storage
    localStorage.clear("unlockedCharacters");
    localStorage.setItem("unlockedCharacters", JSON.stringify(unlockedCharacters));
  }
  // generate unlocked characters to begin with
  generateUnlockedCharacters();

  var unlockCharacter = function(character){
    character.locked = false;
    generateUnlockedCharacters();
    updateCharacterSelectionScreen();
    alert("Unlocked " + character.name);
  }

  var lockCharacter = function(character) {
    character.locked = true;
    generateUnlockedCharacters();
    updateCharacterSelectionScreen();
  }

  // --------------------------------------------------------------
  //
  // CREATING DOM FOR CHARACTER SELECT SCREEN
  //
  // --------------------------------------------------------------
  var generateCharacterSelectionScreen = function(){
    // empty existing html
    var $characterGrid = $("#character__grid");
    $characterGrid.html("");
    // generate list of characters
    $.each(characters, function(){
      var character = this;
      var $characterTile = $("<div class='character--grid--"+character.id+"' />").data("character", character);
      var $characterImage = $("<img src='"+character.idle+"' />");
      if(character.locked == true) {
        $characterTile.addClass("locked");
      }
      $characterTile.append($characterImage);
      $characterTile.appendTo($characterGrid);
    });
    // select first one by default
    $characterGrid.children().first().addClass("selected");
  }
  generateCharacterSelectionScreen();

  // Update character selection dom with locked/unlocked characters
  var updateCharacterSelectionScreen = function(){
    var $characterGridTiles = $("#character__grid > div");
    $.each($characterGridTiles, function(){
      var $thisTile = $(this);
      var thisCharacter = $thisTile.data("character");
      if(thisCharacter.locked == true) {
        $thisTile.addClass("locked");
      } else {
        $thisTile.removeClass("locked");
      }
    });
  }

  // --------------------------------------------------------------
  //
  // GAME MODE SETTINGS
  //
  // --------------------------------------------------------------

  var showPlayerToggles, showLevelSelector, showLadder, randomisePlayerTwo;

  var setGameMode = function(mode){
    gameMode = mode;

    switch(gameMode) {
      case "twoPlayer":
        showPlayerToggles = true;
        showLevelSelector = true;
        randomisePlayerTwo = false;
        showLadder = false;
        break;
      case "singlePlayer":
        showPlayerToggles = false;
        showLevelSelector = true;
        randomisePlayerTwo = true;
        showLadder = false;
        break;
      case "arcadeMode":
        break;
      case "storyMode":
        break;
      default:
        showPlayerToggles = true;
        showLevelSelector = true;
        showLadder = false;
        break;
    }

    if(showPlayerToggles) {
      $(".character--players").show();
    } else {
      $(".character--players").hide();
    }

    if(!randomisePlayerTwo) {
      setPlayerCharacter(player2, billeh);
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
    imagesToPreload.push("images/backgrounds/map.svg");
    imagesToPreload.push("images/backgrounds/01.svg");
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

  var getRandomUnlockedCharacter = function(){
    return unlockedCharacters[Math.floor(Math.random()*unlockedCharacters.length)];
  }

  var getRandomLockedCharacter = function(){
    return lockedCharacters[Math.floor(Math.random()*lockedCharacters.length)];
  }

  $("#main__playBtn").on("click", function(e){
    e.preventDefault();
    setGameMode("singlePlayer");
    startCharacterSelect();
  });

  $("#main__twoPlayBtn").on("click", function(e){
    e.preventDefault();
    setGameMode("twoPlayer");
    startCharacterSelect();
  });

  // $("#main__arcadeBtn").on("click", function(e){
  //   e.preventDefault();
  //   setGameMode("twoPlayer");
  //   startCharacterSelect();
  // });

  // $("#main__storyBtn").on("click", function(e){
  //   e.preventDefault();
  //   setGameMode("twoPlayer");
  //   startCharacterSelect();
  // });

  var startMainMenu = function(){

    // load in character faces
    var leftCharacter = getRandomUnlockedCharacter();
    var rightCharacter = getRandomUnlockedCharacter();
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
    var $newTile = $selectCharacterButtons.filter(function(){
      return $(this).data("character") == currentPlayer.playingAs;
    });

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
    var newCharacter = tile.data("character");
    // visual update of class
    tile.addClass(characterActiveTileClass).siblings().removeClass(characterActiveTileClass);
    setPlayerCharacter(currentPlayer,newCharacter);
    selectCharacterDetails(currentPlayer,newCharacter);
  }
  $selectCharacterButtons.off("click").on("click", function(e){
    e.preventDefault();
    var $thisCharacterTile = $(this);
    // do nothing if the character is locked
    if($thisCharacterTile.hasClass("locked")) {
      return false;
    }
    // do nothing if the player is already playing as this character
    if($thisCharacterTile.data("character") == currentPlayer.playingAs) {
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
    // randomise player two is a "single player" setting.
    if(randomisePlayerTwo) {
      setPlayerCharacter(player2, getRandomCharacter());
    }
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
    gameLevel = levelPath + level + ".svg";
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
    startVs();
  });

  // --------------------------------------------------------------
  //
  // VERSUS SCREEN
  //
  // --------------------------------------------------------------

  var startVs = function(){
    var $vsPlayer1 = $("#versus__character1");
    var $vsPlayer2 = $("#versus__character2");

    // update player character images
    $vsPlayer1.attr("data-character", player1.playingAs.name).find("img").attr("src", player1.playingAs.idle);
    $vsPlayer2.attr("data-character", player2.playingAs.name).find("img").attr("src", player2.playingAs.idle);

    // add dupe class if they are the same character
    if(player2.playingAs == player1.playingAs) {
      $vsPlayer2.addClass("dupe");
    } else {
      $vsPlayer2.removeClass("dupe");
    }

    // transition to the versus scene
    transitionToScene(scVersus);

    // after a while, transition to the fight scene
    setTimeout(function(){
      startRound();
    }, 2000);
  }

  // --------------------------------------------------------------
  //
  // GAME OVER SCREEN
  //
  // --------------------------------------------------------------

  // Set GameOver, declaring the winner
  var gameOver = function(winner){
    // Play Loser Animation
    var loser = getOtherPlayer(winner);
    clearTimeout(loser.timeout);
    updateCharacterSprite(loser, loser.playingAs.death1);
    loser.character.removeClass(hurtPlayerClass);
    loser.character.addClass("dead");
    loser.timeout =  setTimeout(function(){
      updateCharacterSprite(loser, loser.playingAs.death2);
    }, 300);
    // Show game over screen
    $("#game__game-over--winner").text(winner.nice_name);
    showOverlay(overlayGameOver);
    // Stop timer
    gameTimer.stop();

    // unlock character
    if(gameMode == "singlePlayer" && player2 == loser && player2.playingAs.locked == true) {
      unlockCharacter(player2.playingAs);
    }
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

  var playerIdle = function(player) {
    updateCharacterSprite(player, player.playingAs.idle2);
    player.timeout = setTimeout(function(){
      if(player.character.hasClass("dead")) {
        return false;
      }
      updateCharacterSprite(player, player.playingAs.idle);
    }, 1000);
    player.timeout = setTimeout(function(){
      if(player.character.hasClass("dead")) {
        return false;
      }
      playerIdle(player);
    }, 2000);
  }

  // Player attacks another player
  var playerAttack = function(attackingPlayer) {
    hurtPlayer = getOtherPlayer(attackingPlayer);
    attackingPlayer.character.css("z-index", "2");
    hurtPlayer.character.css("z-index", "1");
    // Player attack animation
    clearTimeout(attackingPlayer.timeout);
    updateCharacterSprite(attackingPlayer, attackingPlayer.playingAs.attack);
    attackingPlayer.timeout = setTimeout(function(){
      playerIdle(attackingPlayer);
    }, 200);
    // Player hurt animation
    clearTimeout(hurtPlayer.timeout);
    updateCharacterSprite(hurtPlayer, hurtPlayer.playingAs.hurt);
    hurtPlayer.character.addClass(hurtPlayerClass);
    hurtPlayer.timeout = setTimeout(function(){
      hurtPlayer.character.removeClass(hurtPlayerClass);
      playerIdle(hurtPlayer);
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

    // hue rotate player 2 if it's the same as player 1
    if(player2.playingAs == player1.playingAs) {
      player2.character.addClass("dupe");
    } else {
      player2.character.removeClass("dupe");
    }

    // update background
    var $levelBackground = $("#game__playing");
    $levelBackground.css("background-image", "url("+gameLevel+")");

    // show the appropriate pane
    transitionToScene(scInGame);
    roundStarted = true;

    playerIdle(player1);
    playerIdle(player2);

  }


  // --------------------------------------------------------------
  //
  // SETTINGS
  //
  // --------------------------------------------------------------

  var settingResetUnlocks = function() {
    $.each(character, function(){
      if( character.id === "billeh" || character.id === "thefuzz" || character.id === "jessbian" ) {
        character.locked = false;
      } else {
        character.locked = true;
      }
    });
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
  // startVs();
  // startRound();

});