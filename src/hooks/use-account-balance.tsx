import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';

const useAccountBalance = () => {
  const { account, library } = useEthers();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      if (account && library) {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        // const signer = provider.getSigner();
        const balance = await provider.getBalance(account);
        const formattedBalance = formatUnits(balance, 18); // Assuming 18 decimal places for Ether
        setBalance(+formattedBalance);
      }
    };

    fetchBalance();
  }, [account, library]);

  return balance;
};

export default useAccountBalance;
