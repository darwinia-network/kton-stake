import { useMemo } from "react";

export type UseMigrateStateType = {
  isConnected: boolean;
  isSupportedChainId: boolean;
  isMigrating: boolean; 
  isTransactionConfirming: boolean;
  isLoadingOrRefetching: boolean;
  value: bigint;
};

export const useMigrateState = ({
  isConnected,
  isSupportedChainId,
  isMigrating,
  isTransactionConfirming,
  isLoadingOrRefetching,
  value
}: UseMigrateStateType) => {
  const buttonText = useMemo(() => {
    if (!isConnected) return 'Wallet Disconnected';
    if (!isSupportedChainId) return 'Wrong Network';
    if (isMigrating) return 'Preparing Unstake';
    if (isTransactionConfirming) return 'Confirming Unstake';
    if (isLoadingOrRefetching) return 'Preparing...';

    return 'Unstake';
  }, [
    isConnected,
    isSupportedChainId,
    isMigrating,
    isTransactionConfirming,
    isLoadingOrRefetching
  ]);

  const isButtonDisabled =
    isLoadingOrRefetching || !isConnected || !isSupportedChainId || value === 0n;

  const isFetching = isConnected && isSupportedChainId && isLoadingOrRefetching;

  return { buttonText, isButtonDisabled, isFetching };

}