"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenAddress = exports.TOKENS_BY_NETWORK = exports.TOKENS = void 0;
var invariant = require("tiny-invariant");
var chains_1 = require("./chains");
var TOKENS;
(function (TOKENS) {
    TOKENS["WSTETH"] = "WSTETH";
    TOKENS["STETH"] = "STETH";
    TOKENS["LDO"] = "LDO";
})(TOKENS || (exports.TOKENS = TOKENS = {}));
exports.TOKENS_BY_NETWORK = (_a = {},
    _a[chains_1.CHAINS.Mainnet] = (_b = {},
        _b[TOKENS.WSTETH] = '0xa203607E7eB395862460BA67998D179be5d0808A',
        _b[TOKENS.STETH] = '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        _b[TOKENS.LDO] = '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
        _b),
    _a[chains_1.CHAINS.Ropsten] = (_c = {},
        _c[TOKENS.STETH] = '0xd40EefCFaB888C9159a61221def03bF77773FC19',
        _c),
    _a[chains_1.CHAINS.Rinkeby] = (_d = {},
        _d[TOKENS.WSTETH] = '0xa203607E7eB395862460BA67998D179be5d0808A',
        _d[TOKENS.STETH] = '0xbA453033d328bFdd7799a4643611b616D80ddd97',
        _d[TOKENS.LDO] = '0xbfcb02cf3df4f36ab8185469834e0e00a5fc6053',
        _d),
    _a[chains_1.CHAINS.Goerli] = (_e = {},
        _e[TOKENS.WSTETH] = '0xa203607E7eB395862460BA67998D179be5d0808A',
        _e[TOKENS.STETH] = '0x1643e812ae58766192cf7d2cf9567df2c37e9b7f',
        _e[TOKENS.LDO] = '0x56340274fB5a72af1A3C6609061c451De7961Bd4',
        _e),
    _a[chains_1.CHAINS.Holesky] = (_f = {},
        _f[TOKENS.WSTETH] = '0xa203607E7eB395862460BA67998D179be5d0808A',
        _f[TOKENS.STETH] = '0x5AF57B231c104B8588A9618b60261c7ca3101beA',
        _f[TOKENS.LDO] = '0x2A4DC8ddf6EF93a18441F72662f18516Bc257d8C',
        _f),
    _a);
var getTokenAddress = function (chainId, token) {
    var tokens = exports.TOKENS_BY_NETWORK[chainId];
    invariant(tokens, 'Chain is not supported');
    var address = tokens[token];
    invariant(address, 'Token is not supported');
    return address;
};
exports.getTokenAddress = getTokenAddress;
