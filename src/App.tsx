// Fix: Removed the Vite client type reference which was causing errors.
// Environment variable types are now handled by a global type definition
// in src/types/index.ts, which also allows removing type casts below.
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
              app_id={import.meta.env.VITE_WLD_APP_ID}
              action={import.meta.env.VITE_WLD_ACTION_ID}
              onSuccess={handleSuccess}
              verification_level={VerificationLevel.Device}
            >
              {({ open }: { open: () => void }) => <button onClick={open}>Verify with World ID</button>}
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
