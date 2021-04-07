// Business logic

// create another constructor function for the game itself

function Player(id, turnScore, playerScore) {
  this.id = id;
  this.turnScore = turnScore;
  this.playerScore = playerScore;
  this.id = 0;
}


function getRandomInt() {
  let roll = 0;
  let min = Math.ceil(1);
  let max = Math.floor(7);
  return roll = Math.floor(Math.random() * (max - min) + min);
}

Player.prototype.addPlayer = function (player) {
  player.id = this.assignPlayerId()
  this.player[player.id] = player;
}

Player.prototype.assignPlayerId = function () {
  this.id += 1;
  return this.id;
}

Player.prototype.addTurnScore = function (player) {
  this.turnScore = turnScore + roll;
};

Player.prototype.addPlayerScore = function (turnScore) {
  this.playerScore = turnScore + playerScore;
}



// create another prototype function to record the turn score

// create another prototype function to add turnScore to playerScore

// Add prototype methods to allow our PlayerConstructor to do different things
// let player1 = new Player(playerId, turnScore, playerScore)

// User interface logic

