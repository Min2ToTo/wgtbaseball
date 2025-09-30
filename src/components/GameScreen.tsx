import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameLogic } from '@/hooks/useGameLogic';
import Keypad from '@/components/ui/Keypad';
import Button from '@/components/ui/Button';
import GameHistory from '@/components/GameHistory';
import ResultModal from '@/components/modals/ResultModal';
import { SECRET_CODE_LENGTH } from '@/constants';

interface GameScreenProps {
  onBack: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const { secretCode, guesses, isHomerun, isStrikeOut, submitGuess, resetGame, guessesLeft } = useGameLogic();
  const [currentGuess, setCurrentGuess] = useState<number[]>([]);

  const handleNumberClick = (num: number) => {
    if (currentGuess.length < SECRET_CODE_LENGTH && !currentGuess.includes(num)) {
      setCurrentGuess([...currentGuess, num]);
    }
  };

  const handleDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const handleSubmit = () => {
    if (currentGuess.length === SECRET_CODE_LENGTH) {
      submitGuess(currentGuess);
      setCurrentGuess([]);
    }
  };

  const handleNewGame = () => {
    resetGame();
    setCurrentGuess([]);
  };

  const isGameOver = isHomerun || isStrikeOut;

  return (
    <div className="w-full max-w-sm mx-auto p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {t('guess-the-number', { length: SECRET_CODE_LENGTH })}
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{t('guesses-left', { count: guessesLeft })}</p>

      <div className="flex items-center justify-center w-full h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
        <p className="text-3xl font-mono tracking-widest text-gray-900 dark:text-white">
          {currentGuess.join(' ') || <span className="text-gray-400 dark:text-gray-500">_ _ _</span>}
        </p>
      </div>

      <Keypad
        onNumberClick={handleNumberClick}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        disabled={isGameOver || currentGuess.length !== SECRET_CODE_LENGTH}
      />
      
      <GameHistory guesses={guesses} secretCode={secretCode} t={t} />

      <div className="mt-4 flex space-x-2">
        <Button onClick={handleNewGame} variant="secondary">
          {t('new-game')}
        </Button>
        <Button onClick={onBack} variant="secondary">
          Back
        </Button>
      </div>


      <ResultModal
        isOpen={isGameOver}
        onClose={handleNewGame}
        isHomerun={isHomerun}
        secretCode={secretCode}
      />
    </div>
  );
};

export default GameScreen;