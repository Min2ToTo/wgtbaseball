import React, { createContext, useState, useMemo, useContext, useCallback, ReactNode } from 'react';
import { ethers } from 'ethers';
import { getContract, getTokenContract, getReadOnlyContract } from '@/lib/contract';
import { REWARD_AMOUNT } from '@/constants';

interface GameContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  walletAddress: string | null;
  balance: string;
  isLoading: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  claimReward: () => Promise<void>;
  fetchBalance: () => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleRequest = useCallback(async (request: () => Promise<void>, loadingMessage?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await request();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const connectWallet = useCallback(async () => {
    await handleRequest(async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          await fetchBalance();
        }
      } else {
        throw new Error('Please install MetaMask!');
      }
    });
  }, [handleRequest]);

  const fetchBalance = useCallback(async () => {
    if (!walletAddress) return;
    await handleRequest(async () => {
        const readOnlyContract = getReadOnlyContract();
        const tokenAddress = await readOnlyContract.wgtToken();
        const tokenContract = await getTokenContract(tokenAddress);
        const userBalance = await tokenContract.balanceOf(walletAddress);
        setBalance(ethers.formatUnits(userBalance, 18)); // Assuming 18 decimals
    });
  }, [walletAddress, handleRequest]);
  
  const claimReward = useCallback(async () => {
    await handleRequest(async () => {
        const contract = await getContract();
        const amount = ethers.parseUnits(REWARD_AMOUNT.toString(), 18); // Assuming 18 decimals
        const tx = await contract.claimReward(amount);
        await tx.wait();
        await fetchBalance();
    }, 'Claiming reward...');
  }, [fetchBalance, handleRequest]);

  const value = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
    walletAddress,
    balance,
    isLoading,
    error,
    connectWallet,
    claimReward,
    fetchBalance,
  }), [
    isAuthenticated,
    walletAddress,
    balance,
    isLoading,
    error,
    connectWallet,
    claimReward,
    fetchBalance,
  ]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};