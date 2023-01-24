import React, { useState } from 'react';
import GameOver from './GameOver';
import GuessControl from './GuessControl';
import GuessMessage from './GuessMessage';

const NumberGuessingGame = () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const MAX_ATTEMPTS = 5;

  const [numberToGuess, setnumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setnumberOfGuesses] = useState(0);
  const [latestGuess, setlatestGuess] = useState(null);

  const handleGuess = (guess) => {
    setlatestGuess(Number(guess));
    setnumberOfGuesses(numberOfGuesses + 1);
  };

  const handleReset = () => {
    setnumberToGuess(getRandomNumber());
    setnumberOfGuesses(0);
    setlatestGuess(null);
  };

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  console.log(numberToGuess);
  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;
