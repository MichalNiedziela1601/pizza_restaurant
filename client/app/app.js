import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Directives from './directives/directives';
import AppComponent from './app.component';
import UiBootstrap from 'angular-ui-bootstrap';
import Animate from 'angular-animate';
import Touch from 'angular-touch';
import 'normalize.css';
require('bootstrap-loader');

var $ = require('jquery');
window.jQuery = $;


angular.module('app', [
    uiRouter,
    Common,
    Components,
    Directives,
    UiBootstrap,
    Animate,
    Touch
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
