import template from './item.html';
import controller from './item.controller';
import './item.scss';

const itemComponent = {
    restrict: 'E',
    bindings: {
        item: '<'
    },
    template,
    controller
};

export default itemComponent;
