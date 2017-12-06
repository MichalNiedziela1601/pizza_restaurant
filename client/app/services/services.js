'use strict';
import WalletService from './wallet.service';

const appServices = angular.module('app.services', [])
    .service('Wallet', WalletService)
    .name;

export default appServices;
