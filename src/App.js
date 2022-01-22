import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import $ from 'jquery';

function App() {
  let result = []
  let solution = "hello"
  let guess = "nices"
/*   let guess = window.prompt("Enter your guess")
  while (guess.length < 5) {
    alert("Not enough letters")
    guess = window.prompt("Enter your guess")
  } */

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.keyCode == 8) {
      $(this).prev('.inputs').focus();
    }
};

  $(function() {
    $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.inputs').focus();
        }
    });
});


  
  
  // If word not on database, 
  // then say that it is not a valid word and re-ask


  function addToGrid(guess) {
    let grid = [[0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]

    let index = 0;
    let row_index = 0;
    for (let i = 0; i < guess[row_index].length; i++) {
      for (let j = 0; j < guess.length; j++) {
        grid[i][j] = guess.charAt(index)
        index++
      }
    }
    row_index++
    console.log(grid)
  }
  function letterCheck(guess, solution) {
    for (let i = 0; i < guess.length; i++) {
      let guessedLetter = guess.charAt(i);
      let solutionLetter = solution.charAt(i);
      if (guessedLetter === solutionLetter) {
        result.push("Green")
      } else if (solution.indexOf(guessedLetter) != -1) {
        result.push("Yellow")
      } else {
        result.push("grey")
      }
    }
    console.log(result);
  }

  letterCheck(solution, guess);
  addToGrid(guess)
  return (
    <div className="App">
      <input class="inputs" type="text" maxlength="1" />
      <input class="inputs" type="text" maxlength="1" />
      <input class="inputs" type="text" maxlength="1" />
      <input class="inputs" type="text" maxlength="1" />
      <input class="inputs" type="text" maxlength="1" />

    </div>

  );

}

export default App;
