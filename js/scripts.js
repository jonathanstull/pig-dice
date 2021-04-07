//  ----------------------- Utility Logic -------------------------

function getRandomInt() {
  let roll = 0;
  let min = Math.ceil(1);
  let max = Math.floor(7);
  return roll = Math.floor(Math.random() * (max - min) + min);
}

// Business logic for PigDice

function Game() {
  this.players = {};
  this.id = 0;
};

Game.prototype.incrementId = function () {
  this.id += 1;
  return this.id;
}

Game.prototype.assignPlayerId = function () {
  player.id = this.incrementId();
  this.players[player.id] = player;

// Business logic for Player

function Player(id, turnScore, playerScore) {
  this.turnScore = turnScore;
  this.playerScore = playerScore;
}

Player.prototype.addPlayer = function (player) {
  player.id = this.assignPlayerId()
  this.player[player.id] = player;
}

Player.prototype.addTurnScore = function (player) {
  // create an if statement that ends the turn if roll = 1
  if (roll === 1) {
    // end turn
  }
  this.turnScore = turnScore + roll;
};

Player.prototype.addPlayerScore = function (turnScore) {
  this.playerScore = turnScore + playerScore;
}




// User interface logic

