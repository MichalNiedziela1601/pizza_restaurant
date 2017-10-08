import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuComponent from './menu.component';
import Item from './item/item';

const menuModule = angular.module('menu', [
    uiRouter,
    Item
])
        .config(($stateProvider, $urlRouterProvider) =>
        {
            'ngInject';

            $urlRouterProvider.otherwise('/');

            $stateProvider
                    .state('menu', {
                        url: '/menu',
                        component: 'menu'
                    });
        })

        .component('menu', menuComponent)

        .name;

export default menuModule;
