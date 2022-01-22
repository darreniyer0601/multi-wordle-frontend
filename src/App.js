import React from 'react';
import './App.css';

function App() {
  let result = []
  let solution = "hello"
  let guess = "cools"

  //let grid = Array(6).fill().map(()=>Array(5).fill())

  //grid.forEach(grid.at())

  //console.log(grid)

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
  return (
    <div className="App">
    </div>
  );

}

export default App;
