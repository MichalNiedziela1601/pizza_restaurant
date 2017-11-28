import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Dao from './dao/dao';
import Footer from './footer/footer';

const commonModule = angular.module('app.common', [
    Navbar,
    Hero,
    User,
    Dao,
])
    .component('footerComponent', Footer)

        .name;

export default commonModule;
