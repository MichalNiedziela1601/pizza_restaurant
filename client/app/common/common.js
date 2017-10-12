import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Dao from './dao/dao';

const commonModule = angular.module('app.common', [
    Navbar,
    Hero,
    User,
    Dao
])

        .name;

export default commonModule;
