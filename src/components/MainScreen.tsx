import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGame } from '@/contexts/GameContext';
import Button from '@/components/ui/Button';
import GameScreen from '@/components/GameScreen';

const MainScreen: React.FC = () => {
  const { t } = useTranslation();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { walletAddress, balance, connectWallet, fetchBalance, isLoading } = useGame();

  useEffect(() => {
    if (walletAddress) {
      fetchBalance();
    }
  }, [walletAddress, fetchBalance]);

  if (isGameStarted) {
    return <GameScreen onBack={() => setIsGameStarted(false)} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('wgt-baseball')}</h1>

      <div className="mb-8 w-full max-w-xs">
        {walletAddress ? (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('wallet-connected')}</p>
            <p className="text-xs break-all text-gray-500 dark:text-gray-500">{walletAddress}</p>
            <p className="text-lg font-bold mt-2 text-gray-900 dark:text-white">{t('your-balance')}: {parseFloat(balance).toFixed(2)} WGT</p>
          </div>
        ) : (
          <Button onClick={connectWallet} disabled={isLoading}>
            {t('connect-wallet')}
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <Button onClick={() => setIsGameStarted(true)} size="lg">
          {t('start-game')}
        </Button>
        <div className="flex space-x-2">
          <Button variant="ghost">{t('how-to-play')}</Button>
          <Button variant="ghost">{t('settings')}</Button>
          <Button variant="ghost">{t('ranking')}</Button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;