import './footer.scss';
class FooterController {
    constructor()  {
        this.name = 'Pizzeria Devoile';
    }
}

const template = require('./footer.html');

const FooterComponent = {
    controller: FooterController,
    template,
    bindings: 'E'
};

export default FooterComponent;
