import { CHAINS } from './chains';
export declare const WITHDRAWAL_QUEUE_BY_NETWORK: {
    [key in CHAINS]?: string;
};
export declare const getWithdrawalQueueAddress: (chainId: CHAINS) => string;
