'use strict';

export default class AddMenuController {

    constructor(Upload, MenuDAO) {
        'ngInject';
        this.menu = {
            ingredients: [],
            prices: {}
        };
        this.file = {};
        this.upload = Upload;
        this.menuService = MenuDAO;
    }

    submit() {
        let dataToUpload = {
            url: 'api/menu/image',
            data: {
                file: this.file
            }
        };

        this.upload.upload(dataToUpload).then(() => {
            this.menu.thumb = this.file.name.match(/(\w+).jpeg|jpg/)[1];
            return this.menuService.addMenu(this.menu).then(() => {
                this.menu = {
                    ingredients: [],
                    prices: {}
                };
                this.file = {};
            })
                .catch(error => console.error(error));
        })
    }

}