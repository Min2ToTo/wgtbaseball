import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';
import { useGame, GameProvider } from '@/contexts/GameContext';
import MainScreen from '@/components/MainScreen';

const AppContent = () => {
  const { isAuthenticated, setIsAuthenticated } = useGame();

  const handleSuccess = () => {
    // This is where you would perform any actions after successful verification
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {isAuthenticated ? (
        <MainScreen />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">WGT Baseball</h1>
            <p className="mb-8">Verify with World ID to play.</p>
            <IDKitWidget
              app_id={import.meta.env.VITE_WLD_APP_ID as `app_${string}`}
              action={import.meta.env.VITE_WLD_ACTION_ID as string}
              onSuccess={handleSuccess}
              verification_level={VerificationLevel.Device}
            >
              {({ open }) => <button onClick={open}>Verify with World ID</button>}
            </IDKitWidget>
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