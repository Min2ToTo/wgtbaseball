import React from 'react';
import { GameHistoryProps } from '@/types';

const GameHistory: React.FC<GameHistoryProps> = ({ guesses, t }) => {
  return (
    <div className="w-full mt-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{t('history')}</h3>
      <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
        {guesses.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm">No guesses yet.</p>
        ) : (
          [...guesses].reverse().map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md"
            >
              <span className="font-mono text-lg text-gray-700 dark:text-gray-300">{item.guess.join(' ')}</span>
              <div>
                <span className="font-semibold text-green-600 dark:text-green-400">{item.strikes}S</span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400 ml-2">{item.balls}B</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameHistory;