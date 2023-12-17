"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainColor = exports.CHAINS_COLORS = exports.CHAINS_IDS = exports.CHAINS = void 0;
var invariant = require("tiny-invariant");
var CHAINS;
(function (CHAINS) {
    CHAINS[CHAINS["Mainnet"] = 1] = "Mainnet";
    CHAINS[CHAINS["Ropsten"] = 3] = "Ropsten";
    CHAINS[CHAINS["Rinkeby"] = 4] = "Rinkeby";
    CHAINS[CHAINS["Goerli"] = 5] = "Goerli";
    CHAINS[CHAINS["Kovan"] = 42] = "Kovan";
    CHAINS[CHAINS["Kintsugi"] = 1337702] = "Kintsugi";
    CHAINS[CHAINS["Kiln"] = 1337802] = "Kiln";
    CHAINS[CHAINS["Holesky"] = 17000] = "Holesky";
    CHAINS[CHAINS["Moonbeam"] = 1284] = "Moonbeam";
    CHAINS[CHAINS["Moonriver"] = 1285] = "Moonriver";
    CHAINS[CHAINS["Moonbase"] = 1287] = "Moonbase";
    CHAINS[CHAINS["Arbitrum"] = 42161] = "Arbitrum";
    CHAINS[CHAINS["Optimism"] = 10] = "Optimism";
    CHAINS[CHAINS["Fuji"] = 43113] = "Fuji";
    CHAINS[CHAINS["Avalanche"] = 43114] = "Avalanche";
})(CHAINS || (exports.CHAINS = CHAINS = {}));
exports.CHAINS_IDS = [CHAINS.Mainnet, CHAINS.Ropsten, CHAINS.Rinkeby, CHAINS.Goerli, CHAINS.Kovan];
exports.CHAINS_COLORS = (_a = {},
    _a[CHAINS.Mainnet] = '#29b6af',
    _a[CHAINS.Ropsten] = '#ff4a8d',
    _a[CHAINS.Rinkeby] = '#f6c343',
    _a[CHAINS.Goerli] = '#3099f2',
    _a[CHAINS.Kovan] = '#9064ff',
    _a);
var getChainColor = function (chainId) {
    var color = exports.CHAINS_COLORS[chainId];
    invariant(color != null, 'Chain is not supported');
    return color;
};
exports.getChainColor = getChainColor;
