document.addEventListener("DOMContentLoaded", function() {
  // Grab the restart button
  var restartButton = document.querySelector("#b");

  // Grab all the cells
  var cells = document.querySelectorAll('td');

  // Variable to track the last marker placed
  var lastMarker = 'O'; // Initialize with 'O' assuming 'X' starts the game

  // Function to clear the board
  function clearBoard() {
      cells.forEach(function(cell) {
          cell.textContent = '';
      });
      lastMarker = 'O'; // Reset lastMarker to 'O'
  }

  // Function to check for a winner
  function checkWinner() {
      // Define winning combinations
      const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6]              // Diagonals
      ];

      // Iterate through each winning combination
      for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          if (cells[a].textContent !== '' &&
              cells[a].textContent === cells[b].textContent &&
              cells[a].textContent === cells[c].textContent) {
              return cells[a].textContent; // Return the symbol of the winner
          }
      }

      return null; // Return null if there's no winner
  }

  // Function to change the marker
  function changeMarker(cell) {
      if (cell.textContent === 'X' || cell.textContent === 'O') {
          return; // Do nothing if the cell already contains 'X' or 'O'
      }

      if (lastMarker === 'X') {
          cell.textContent = 'O';
          lastMarker = 'O';
      } else {
          cell.textContent = 'X';
          lastMarker = 'X';
      }

      // Check for a winner after each move
      const winner = checkWinner();
      if (winner) {
          // Declare the winner and loser
          if (winner === 'X') {
              alert('Player X wins!');
          } else {
              alert('Player O wins!');
          }

          // Clear the board after declaring the winner
          clearBoard();
      }
  }

  // Event listener for the restart button
  restartButton.addEventListener('click', clearBoard);

  // Event listener for each cell
  cells.forEach(function(cell) {
      cell.addEventListener('click', function() {
          changeMarker(cell);
      });
  });
});
a