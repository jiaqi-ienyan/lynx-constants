"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithdrawalQueueAddress = exports.WITHDRAWAL_QUEUE_BY_NETWORK = void 0;
var tiny_invariant_1 = require("tiny-invariant");
var chains_1 = require("./chains");
exports.WITHDRAWAL_QUEUE_BY_NETWORK = (_a = {},
    _a[chains_1.CHAINS.Mainnet] = '0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1',
    _a[chains_1.CHAINS.Goerli] = '0xCF117961421cA9e546cD7f50bC73abCdB3039533',
    _a[chains_1.CHAINS.Holesky] = '0xc7cc160b58F8Bb0baC94b80847E2CF2800565C50',
    _a);
var getWithdrawalQueueAddress = function (chainId) {
    var address = exports.WITHDRAWAL_QUEUE_BY_NETWORK[chainId];
    (0, tiny_invariant_1.default)(address, 'Chain is not supported');
    return address;
};
exports.getWithdrawalQueueAddress = getWithdrawalQueueAddress;
