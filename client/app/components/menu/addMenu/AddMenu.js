'use strict';

import AddMenuComponent from './AddMenu.component';
import ingredient from './ingredient/ingredient';
import angular from 'angular';
import PricesComponent from './prices/prices';

const AddMenuModule = angular.module('addMenu',[ingredient])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('addMenu', {
            url: '/menu/addMenu',
            component: 'addMenuComponent'
        })
    })
    .component('addMenuComponent',AddMenuComponent)
    .component('prices',PricesComponent)
    .name;

export default AddMenuModule;
