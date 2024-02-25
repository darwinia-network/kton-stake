'use client';

import { useMemo } from 'react';
import { formatEther } from 'viem';
import { useReadContract, Config, useAccount } from 'wagmi';
import { useApp } from './useApp';

interface UseBigIntContractQueryProps {
  abi: any;
  contractAddress: `0x${string}`;
  functionName: string;
  args?: any[];
  forceEnabled?: boolean;
}

export const useBigIntContractQuery = ({
  contractAddress,
  abi,
  functionName,
  args = []
}: UseBigIntContractQueryProps) => {
  const { isConnected } = useAccount();
  const { activeChainId } = useApp();

  const { data, refetch, isLoading, isSuccess } = useReadContract<
    any,
    string,
    any[],
    Config,
    bigint | undefined
  >({
    chainId: activeChainId,
    address: contractAddress,
    abi,
    functionName,
    args,
    query: {
      enabled: isConnected
    }
  });

  const result = useMemo(() => {
    if (isSuccess && data) {
      return {
        value: data,
        formatted: formatEther(data)
      };
    }
    return {
      value: 0n,
      formatted: '0'
    };
  }, [data, isSuccess]);

  return {
    value: result.value,
    formatted: result.formatted,
    isLoading,
    refetch
  };
};