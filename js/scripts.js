//  ----------------------- Utility Logic -------------------------

// function getRandomInt() {
//   let roll = 0;
//   let min = Math.ceil(1);
//   let max = Math.floor(7);
//   return roll = Math.floor(Math.random() * (max - min) + min);
// }

// Business logic for PigDice

// Game.prototype.incrementId = function () {
//   this.id += 1;
//   return this.id;
// }

// Game.prototype.assignPlayerId = function () {
//   player.id = this.incrementId();
//   this.players[player.id] = player;
// };

// Business logic for Player

// Player {
//   name: "brooke",
//   turnScore: 0,
//   playerScore: 0
// }

// Game {
//   players: {
//     1 : {
//       name: "brooke",
//       turnScore: 0,
//       playerScore: 0
//     }, 
//     2: {
//       name: "brooke",
//       turnScore: 0,
//       playerScore: 0
//     }
//   },
//   id: 0
// }

function Game() {
  this.players = {};
  this.id = 0;
};

function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.playerScore = 0;
}

Game.prototype.addPlayer = function (player) {
  this.players[player.name] = player;
}

Player.prototype.addTurnScore = function() {
  let roll = 0;
  let min = Math.ceil(1);
  let max = Math.floor(7);
  roll = Math.floor(Math.random() * (max - min) + min); 
  if (roll === 1) {
    this.turnScore = this.turnScore * 0
  } else {
    this.turnScore = this.turnScore + roll;
  };
};

Player.prototype.addPlayerScore = function (turnScore) {
  this.playerScore = this.turnScore + this.playerScore;
  if (this.playerScore >= 10) {
    alert("Congratulations, " + this.players + ", you have won pig dice!");
    this.playerScore = 0;
    this.turnScore = 0;
  }
  this.turnScore = 0;
  return this.playerScore;
}

function newPlayers() {
  let game = new Game();
  let player1 = new Player(prompt("What's your name, player 1?"));
  let player2 = new Player(prompt("What's your name, player 2?"));
  game.addPlayer(player1);
  game.addPlayer(player2);
  return game.players
};


// User interface logic

// $(document).ready(function() {
//   newPlayers();
// });

// function addContactListeners() {
//   $("#btnhold1").on("click", player1.addTurnScore());
//   $("#btnhold2").on("click", player2.addTurnScore());
//   $("#btnroll1").on("click", player1.roll());
//   $("#btnroll2").on("click", player2.roll());
// }