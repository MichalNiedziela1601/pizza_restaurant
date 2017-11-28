'use strict';
import template from './ingredient.html';
import controller from './ingredient.controller';
import './ingredient.scss';

const IngredientComoponent = {
    restrict: 'E',
    bindings: {
        ingredients: '<'
    },
    template,
    controller

};

export default IngredientComoponent;
