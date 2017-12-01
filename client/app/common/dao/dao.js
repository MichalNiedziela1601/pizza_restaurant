import MenuDAO from './menu.dao';
const DaoModule = angular.module('dao', [])
        .service('MenuDAO', MenuDAO)
        .name;

export default DaoModule;
