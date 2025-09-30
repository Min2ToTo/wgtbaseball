import { useState, useEffect, useCallback } from 'react';
import { SECRET_CODE_LENGTH, MAX_GUESSES } from '@/constants';
import { GuessResult } from '@/types';

export const useGameLogic = () => {
  const [secretCode, setSecretCode] = useState<number[]>([]);
  const [guesses, setGuesses] = useState<GuessResult[]>([]);
  const [isHomerun, setIsHomerun] = useState(false);
  const [isStrikeOut, setIsStrikeOut] = useState(false);

  const generateSecretCode = useCallback(() => {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const code = [];
    for (let i = 0; i < SECRET_CODE_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      code.push(digits.splice(randomIndex, 1)[0]);
    }
    setSecretCode(code);
  }, []);

  useEffect(() => {
    generateSecretCode();
  }, [generateSecretCode]);

  const resetGame = useCallback(() => {
    generateSecretCode();
    setGuesses([]);
    setIsHomerun(false);
    setIsStrikeOut(false);
  }, [generateSecretCode]);

  const submitGuess = (guess: number[]) => {
    let strikes = 0;
    let balls = 0;

    guess.forEach((digit, index) => {
      if (digit === secretCode[index]) {
        strikes++;
      } else if (secretCode.includes(digit)) {
        balls++;
      }
    });

    const newGuesses = [...guesses, { guess, strikes, balls }];
    setGuesses(newGuesses);

    if (strikes === SECRET_CODE_LENGTH) {
      setIsHomerun(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setIsStrikeOut(true);
    }
  };

  return {
    secretCode,
    guesses,
    isHomerun,
    isStrikeOut,
    submitGuess,
    resetGame,
    guessesLeft: MAX_GUESSES - guesses.length,
  };
};