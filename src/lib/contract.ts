import { ethers } from 'ethers';
import { contractAbi } from '@/lib/abi';

const contractAddress = '0xYourContractAddressHere'; // Replace with your deployed contract address

let provider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  provider = new ethers.BrowserProvider(window.ethereum);
} else {
  // Fallback provider if MetaMask is not available
  provider = new ethers.JsonRpcProvider('https://rpc-mainnet.matic.quiknode.pro');
}

export const getContract = async () => {
    if (!provider) throw new Error("No Ethereum provider found.");
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, contractAbi, signer);
};

export const getReadOnlyContract = () => {
    if (!provider) throw new Error("No Ethereum provider found.");
    return new ethers.Contract(contractAddress, contractAbi, provider);
};

export const getTokenContract = async (tokenAddress: string) => {
    if (!provider) throw new Error("No Ethereum provider found.");
    const signer = await provider.getSigner();
    // A generic ERC20 ABI, only need balanceOf
    const tokenAbi = [
        "function balanceOf(address owner) view returns (uint256)",
    ];
    return new ethers.Contract(tokenAddress, tokenAbi, signer);
};