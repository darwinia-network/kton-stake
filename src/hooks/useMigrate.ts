import { useWriteContract } from "wagmi";
import { useCallback, useRef } from "react";
import { parseEther, WriteContractReturnType } from "viem";
import { toast } from "sonner";

import { abi } from "@/config/abi/KTONStakingRewards";

import { getOperationStatus, useAppState } from "./useAppState";
import { useChain } from "./useChain";
import { useLatestCallback } from "./useLatestCallback";
import { ErrorType, SuccessType, useTransactionStatus, UseTransactionStatusProps } from "./useTransactionStatus";
import { useWalletInteractionToast } from "./useWalletInteractionToast";


interface UseMigrateProps extends Pick<UseTransactionStatusProps, 'onError' | 'onSuccess'> {
    ownerAddress: `0x${string}`;
}

export function useMigrate({ ownerAddress, onError, onSuccess }: UseMigrateProps) {
    const { activeChainId, activeChain } = useChain();
    const { operationStatusMap, updateOperationStatus } = useAppState();
    const onSuccessLatest = useLatestCallback<SuccessType>(onSuccess);
    const onErrorLatest = useLatestCallback<ErrorType>(onError);

    const toastRef = useRef<string | number | null>(null);
  
  
    const { writeContractAsync, isPending, isError, isSuccess, failureReason, data, reset } =
      useWriteContract();
    
    const migrate = useCallback(
        async (): Promise<WriteContractReturnType> => {
            updateOperationStatus('migrate', 1);
            return await writeContractAsync({
            chainId: activeChainId,
            abi,
            address: activeChain?.stakingContractAddress,
            account: ownerAddress!,
            functionName: 'exit',
            args: [],
            })?.catch((data) => {
            updateOperationStatus('migrate', 0);
            return data;
            });
        },
        [
            activeChain?.stakingContractAddress,
            activeChainId,
            ownerAddress,
            writeContractAsync,
            updateOperationStatus
        ]
    );

    const { isLoading: isMigrateTransactionConfirming } = useTransactionStatus({
        hash: data,
        onSuccess: (data) => {
          updateOperationStatus('migrate', 0);
          if (data) {
            reset();
            onSuccessLatest?.(data);
          }
        },
        onError() {
          reset();
          updateOperationStatus('migrate', 0);
          onErrorLatest ?? (() => null);
        }
    });

    const isMigrateAvailable =
        getOperationStatus(operationStatusMap, ownerAddress, activeChainId, 'migrate') === 1;

    useWalletInteractionToast({
        isError,
        isSuccess,
        failureReason
    });



    return {
        migrate,
        isMigrating: isMigrateAvailable && isPending,
        migrateData: data,
        isMigrateSuccess: isSuccess,
        isMigrateError: isError,
        migrateFailureReason: failureReason,
        isTransactionConfirming: isMigrateAvailable && isMigrateTransactionConfirming
      };
}
