import angular from 'angular';
import IngredientComponent from './ingredient.component';

const IngredientModule = angular.module('ingredients', [])
        .component('ingredient', IngredientComponent)
        .name;

export default IngredientModule;
