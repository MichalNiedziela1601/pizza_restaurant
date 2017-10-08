import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';

const componentModule = angular.module('app.components', [
    Home,
    About,
    Menu
])

        .name;

export default componentModule;
