//Define crystals that will have attribute (value) that can be changed.

var crystals = { 
    greengem:
    {
      name: "Green",
      value: 0
    },
    redgem:
    {
      name: "Red",
      value: 0
    },
    bluegem:
    {
      name: "Blue",
      value: 0
    },
    yellowgem:
    {
      name: "Yellow",
      value: 0
    }
  };

  //Parameters for things that need to be counted or updated
  var winsCount = 0;
  var lossesCount = 0;
  var currentScore = 0;
  var targetScore = 0;
  
  //Functions
  // This is the Random Number Generator aka RNG, which generates a handy dandy random number for us. +1 needed to achieve correct value
  var generateRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Function to reset variables and initalize the start of the game
  var InitalizeGame = function() {

    // Reset the variables only target and current score. Resetting winsCount or lossesCount will reset the losses and wins counter on every check of the WinTrue function. Found this out through trial and error.
    currentScore = 0;
    targetScore = 0;

    // Randomly generates a random value from 19 to 120 to assign to the target score.
    targetScore = generateRandom(19, 120);
  
    // Generate random numbers to assign to values of the different gems
    crystals.greengem.value = generateRandom(1, 12);
    crystals.yellowgem.value = generateRandom(1, 12);
    crystals.bluegem.value = generateRandom(1, 12);
    crystals.redgem.value = generateRandom(1, 12);
  
    //Set Score and Target Score accordingly 
    $("#playerscore").html(currentScore);
    $("#targetscore").html(targetScore);
  
    //Console log to display target score, and display how much each gem is worth.
    console.log("-");
    console.log("Target Score: " + targetScore);
    console.log("Yellow: " + crystals.yellowgem.value);
    console.log("Red: " + crystals.redgem.value);
    console.log("Green: " + crystals.greengem.value);
    console.log("Blue: " + crystals.bluegem.value);
    console.log("-");
  };

  // Function to check if player won or lost, then restarts game
  var WinTrue = function() {

    // Check if currentScore is larger than targetScore, alert user, and update the lossesCount and html.
    if (currentScore > targetScore) {
      alert("You lost!");
      console.log("You lost");
      lossesCount++;
      $("#losses").html(lossesCount);
      // Call function to restart game or else game stacks score
      InitalizeGame();
    }
      // Same deal as above but with winning. Checks scores, updates accordingly.
    else if (currentScore === targetScore) {
      alert("You won!");
      console.log("You won!");
      winsCount++;
      $("#wins").html(winsCount);
      InitalizeGame();
    }
  
  };
  
  // Create on click functions that addValue to the crystal colors according to color clicked.
  $("#bluegem").click(function() {
    addValues(crystals.bluegem);
  });
  
  $("#redgem").click(function() {
    addValues(crystals.redgem);
  });
  
  $("#greengem").click(function() {
    addValues(crystals.greengem);
  });
  
  $("#yellowgem").click(function() {
    addValues(crystals.yellowgem);
  });

  // Function to create value updates for crystals that havebeen clicked.
  var addValues = function(crystalvalueclick) {
  
    // Update the score on clicked crystals, adding value to the variable currentScore with crystal
    currentScore += crystalvalueclick.value;
    $("#playerscore").html(currentScore);
    // check if the play wins or loses 
    WinTrue();
    console.log("Score: " + currentScore);
  };
  
  
  // Starts the Game
  InitalizeGame();