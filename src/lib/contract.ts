import { ethers } from 'ethers';
import { contractAbi } from '@/lib/abi';

// TODO: Replace with your deployed contract address
const contractAddress = '0xYourContractAddressHere'; 

let provider: ethers.BrowserProvider | ethers.JsonRpcProvider;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  provider = new ethers.BrowserProvider(window.ethereum);
} else {
  // Fallback read-only provider if MetaMask is not available
  // TODO: Replace with a provider for your target network (e.g., Polygon, Optimism)
  provider = new ethers.JsonRpcProvider('https://rpc-mainnet.matic.quiknode.pro');
}

export const getContract = async () => {
    if (!(provider instanceof ethers.BrowserProvider)) {
        throw new Error("A wallet provider (e.g., MetaMask) is required for transactions.");
    }
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, contractAbi, signer);
};

export const getReadOnlyContract = () => {
    return new ethers.Contract(contractAddress, contractAbi, provider);
};

export const getTokenContract = async (tokenAddress: string) => {
    if (!(provider instanceof ethers.BrowserProvider)) {
         throw new Error("A wallet provider (e.g., MetaMask) is required for transactions.");
    }
    const signer = await provider.getSigner();
    const tokenAbi = [ "function balanceOf(address owner) view returns (uint256)" ];
    return new ethers.Contract(tokenAddress, tokenAbi, signer);
};
