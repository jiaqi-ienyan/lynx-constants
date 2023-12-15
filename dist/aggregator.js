import invariant from 'tiny-invariant';
import { CHAINS } from './chains';
export const AGGREGATOR_BY_NETWORK = {
    [CHAINS.Mainnet]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
};
export const getAggregatorAddress = (chainId) => {
    const address = AGGREGATOR_BY_NETWORK[chainId];
    invariant(address != null, 'Chain is not supported');
    return address;
};
