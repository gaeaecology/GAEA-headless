/*jslint node: true */
"use strict";
var headlessWallet = require('../start.js');
var eventBus = require('GAEAcore/event_bus.js');


function claimBack(){
	headlessWallet.readFirstAddress(address => {
		var Wallet = require('GAEAcore/wallet.js');
		Wallet.claimBackOldTextcoins(address, 7);
	});
}

eventBus.on('headless_wallet_ready', claimBack);
