import ether from './helpers/ether';
import tokens from './helpers/tokens';
import unixTime from './helpers/unixTime';
import {duration} from './helpers/increaseTime';

import callback from './testcallback/callback';

const token = artifacts.require('UBCoinToken.sol');
const crowdsale = artifacts.require('ICO.sol');
const callbacktest = artifacts.require('CallbackTest.sol');

contract('Callback test', function (accounts) {
  before(config);
  callback(token, crowdsale, callbacktest, accounts);
});

function config() {
  // variables list based on info from README
  this.start = unixTime('01 Apr 2018 00:00:00 GMT');
  this.period = 60;
  this.price = tokens(14286);
  this.hardcap = ether(96000);
  this.minInvestedLimit = ether(0.1);
  this.wallet = '0x98882D176234AEb736bbBDB173a8D24794A3b085';
  this.BountyTokensWallet = '0x28732f6dc12606D529a020b9ac04C9d6f881D3c5';
  this.ReservedTokensWallet = '0x28732f6dc12606D529a020b9ac04C9d6f881D3c5';
  this.TeamTokensPercent = 12;
  this.BountyTokensPercent = 4;
  this.ReservedTokensPercent = 34;

  // variables for additional testing convinience
  this.end = this.start + duration.days(this.period);
  this.beforeStart = this.start - duration.seconds(10);
  this.afterEnd = this.end + duration.seconds(1);
}