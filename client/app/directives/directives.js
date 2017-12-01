import NavFixed from './navFixed.directive';
const directiveModule = angular.module('app.directive', [])
        .directive('navFixed', () => new NavFixed())
        .name;

export default directiveModule;
