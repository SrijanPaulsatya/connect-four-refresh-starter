const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    let checkHorizontalWin = (move) => {
      for (let row in grid) {
        for(let i = 0; i < (grid[row].length - 4); i++) {
          if (
            grid[row][i + 0] === move &&
            grid[row][i + 1] === move &&
            grid[row][i + 2] === move &&
            grid[row][i + 3] === move
          ) {
              return true;
          }
        }
      }
      return false;
    }

    let checkVerticalWin = (move) => {
      for (let col = 0; col < grid[0].length; col++) {
        for (let row = 0; row <= (grid.length - 4); row++) {
          if (
            grid[row + 0][col] === move &&
            grid[row + 1][col] === move &&
            grid[row + 2][col] === move &&
            grid[row + 3][col] === move
          ) {
              return true;
          }
        }
      }
      return false;
    }

    let checkDiagonalWin = (move) => {
      let leftDiagonalWin = null;
      let rightDiagonalWin = null;

      for (let col = 0; col <= (grid[0].length - 4); col++) {
        for (let row = 0; row <= (grid.length - 4); row++) {
          if (
            grid[row + 0][col + 0] === move &&
            grid[row + 1][col + 1] === move &&
            grid[row + 2][col + 2] === move &&
            grid[row + 3][col + 3] === move
          ) {
              leftDiagonalWin = true;
          }
        }
        for (let col = grid[0].length; col >= grid[0].
      }
    }



    if (checkHorizontalWin("X") || checkVerticalWin("X")) {
      return "X";
    }
    if (checkHorizontalWin("O") || checkVerticalWin("O")) {
      return "O";
    }

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;
