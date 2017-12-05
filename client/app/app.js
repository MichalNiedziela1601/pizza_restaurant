import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Directives from './directives/directives';
import AppComponent from './app.component';
import UiBootstrap from 'angular-ui-bootstrap';
import Animate from 'angular-animate';
import Touch from 'angular-touch';
import NgFileUpload from 'ng-file-upload';
import Services from './services/services';
import 'angular-google-maps';
import 'angular-simple-logger';
import 'normalize.css';

require('bootstrap-loader');
const $ = require('jquery');
const _ = require('lodash');
window.jQuery = $;

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Directives,
    UiBootstrap,
    Animate,
    Touch,
    Services,
    NgFileUpload,
    'uiGmapgoogle-maps',
    'nemLogging'
])
        .config(($locationProvider, uiGmapGoogleMapApiProvider) =>
        {
            'ngInject';
            // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
            // #how-to-configure-your-server-to-work-with-html5mode
            $locationProvider.html5Mode(true).hashPrefix('!');
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyDuvC85BSQuPcUDuGIJLhDbtpLgxDVds0Y',
                v: '3.20',
                libraries: 'geometry,visualization'
            })
        })

        .component('app', AppComponent);
