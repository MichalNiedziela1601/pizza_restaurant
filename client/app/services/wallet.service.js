const Wallet = function ($q) {
    'ngInject';
    const wallet = {
        money: 19
    };
    const getWallet = () => {
        "use strict";
        const deferred = $q.defer();
        deferred.resolve(wallet);

        return deferred.promise;
    };

    return {
        getWallet
    }
};

export default Wallet;