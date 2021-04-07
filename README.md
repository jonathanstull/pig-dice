# _{Application Name}_

#### _{Brief description of application}, {Date of current version}

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Software requirements (internet browser, code editor, etc.)
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase

* Download/clone instructions
1. Download this repository onto your computer by clicking the 'code' button
2. Open the project folder.
3. Double-click the index.html to open it in your web browser

*Open via Bash/GitBash:
1. Clone this repository onto your computer: git clone {PUT_REPO_HERE}
2. Navigate into the {NAME_OF_DIRECTORY}  directory, and open in VSCode or preferred text editor code .
3. Open index.html in Chrome or preferred browser

To see my live website go to {GH_PAGES_LINK_HERE}!

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Specs

* Business logic that creates a player object, stores a players total and round scores and a unique ID
* Game rules:
  *  If the player rolls a 1, they score nothing for the turn but the player score is not affected
  * If the player rolls any other number, it is added to their turn score until their turn ends or they roll a 1
  * When their turn ends, their turn score is added to their player score
  * When the player score hits 100, the game ends, the player with 100 wins, and the winner receives a victory point
* User logic that displays all relevant scoring information, the rules of the game, buttons for rolling and ending a turn

## Tests

Describe: PlayerConstructor();
  1. Test: "It creates a constructor object for a player"
  Code:
  function PlayerConstructor {playerId, turnScore, playerScore}
  Expected Output: let playerName = new PlayerConstructor {playerId, turnScore, playerScore}

  Describe: "createPlayer"
  2. Test: "It creates a player using the PlayerConstructor"
  Code:
  let createPlayer = new PlayerConstructor(playerId, turnScore, playerScore)
  Expected Output:

## MIT License

Copyright (c) 2021 Jonathan Stull

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_

- What will happen when a user clicks "Play"?
	- Random number generator that launches and generates those numbers
- What objects will you need?
	- A die with six properties assigning a number value corresponding with a die
	- If ... else statement to determine actions based on the roll of the die
	- A scoring object that stores the number value and score
	- Player objects
		- Assigned an objectId
		- Keeps the score tallied as an objectId-like function
- What key-value pairs will each object need to contain in order for the game to work?
	- Player
		- total-score: 
		- round-score: {}
		- round-roll-history:
	- Die
		- number1: 1
		- number2: 2
		- etc.
- What functions?
	- switch statement
	- getRandomInt()
- How will these be triggered throughout the gameplay?
	- .on or .click function
	- An "hold" button that passes values from round score to total score and begins another player's turn
	- .show() and .hide() div that reveals the winner and has some sort of option to play again, probably in the form of a button
	- Eventually, CRUD functionality to add/edit/delete players
- How will information be collected from the user? How will it be displayed?
	- Page elements that indicate:
		- Player score
		- Round score
		- Opponent scoreboard
		- Win counter
	- Colors:
		- Use red for buttons ending turns
		- Use green for buttons to roll
	- Page styling elements
		- Headers
		- Intro to the game
		- Overview of game rules including the rules about scoring and victory conditions
- When you have a broad overview of how you want to build your game, identify the simplest behavior, and perhaps what behaviors to tackle after that. Remember to start simple and work one step at a time.