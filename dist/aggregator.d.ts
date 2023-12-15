import { CHAINS } from './chains';
export declare const AGGREGATOR_BY_NETWORK: {
    [key in CHAINS]?: string;
};
export declare const getAggregatorAddress: (chainId: CHAINS) => string;
