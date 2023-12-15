export declare enum CHAINS {
    Mainnet = 1,
    Ropsten = 3,// decommissioned
    Rinkeby = 4,// decommissioned
    Goerli = 5,// deprecated
    Kovan = 42,// decommissioned
    Kintsugi = 1337702,// decommissioned
    Kiln = 1337802,// decommissioned
    Holesky = 17000,
    Moonbeam = 1284,
    Moonriver = 1285,
    Moonbase = 1287,
    Arbitrum = 42161,
    Optimism = 10,
    Fuji = 43113,
    Avalanche = 43114
}
export declare const CHAINS_IDS: CHAINS[];
export declare const CHAINS_COLORS: {
    [key in CHAINS]?: string;
};
export declare const getChainColor: (chainId: CHAINS) => string;
