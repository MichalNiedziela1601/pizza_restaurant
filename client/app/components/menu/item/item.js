import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemComponent from './item.component';

const itemModule = angular.module('item', [
    uiRouter
])

        .component('item', itemComponent)

        .name;

export default itemModule;
