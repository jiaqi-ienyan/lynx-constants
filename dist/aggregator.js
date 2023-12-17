"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregatorAddress = exports.AGGREGATOR_BY_NETWORK = void 0;
var tiny_invariant_1 = require("tiny-invariant");
var chains_1 = require("./chains");
exports.AGGREGATOR_BY_NETWORK = (_a = {},
    _a[chains_1.CHAINS.Mainnet] = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    _a);
var getAggregatorAddress = function (chainId) {
    var address = exports.AGGREGATOR_BY_NETWORK[chainId];
    (0, tiny_invariant_1.default)(address != null, 'Chain is not supported');
    return address;
};
exports.getAggregatorAddress = getAggregatorAddress;
