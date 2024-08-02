import { useMemo } from "react";

export type UseMigrateStateType = {
    isConnected: boolean;
    isSupportedChainId: boolean;
    isMigrating: boolean; //isMigrating
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
        if (isMigrating) return 'Preparing Migrate';
        if (isTransactionConfirming) return 'Confirming Migrate';
        if (isLoadingOrRefetching) return 'Preparing...';
    
        return 'Migrate';
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