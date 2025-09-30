import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';
import { useGame, GameProvider } from '@/contexts/GameContext';
import MainScreen from '@/components/MainScreen';

const AppContent = () => {
  const { isAuthenticated, setIsAuthenticated } = useGame();

  const handleSuccess = () => {
    // This action marks the user as human-verified, allowing them to proceed.
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {isAuthenticated ? (
        <MainScreen />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">WGT Baseball</h1>
            <IDKitWidget
              app_id={import.meta.env.VITE_WLD_APP_ID}
              action={import.meta.env.VITE_WLD_ACTION_ID}
              onSuccess={handleSuccess}
              verification_level={VerificationLevel.Device}
            />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <GameProvider>
    <AppContent />
  </GameProvider>
);

export default App;
