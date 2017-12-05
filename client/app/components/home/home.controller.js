class HomeController {
    constructor(Wallet)
    {
        'ngInject';
        this.name = 'home';
        this.map = {
            center: {
                latitude: 50.011587,
                longitude: 20.983861
            },
            zoom: 15
        };
        this.marker = {
            id: 1,
            cords: {
                latitude: 50.011587,
                longitude: 20.983861
            }
        };

        this.wallet = Wallet.getWallet().then(result => {
        });
    }
}

export default HomeController;
