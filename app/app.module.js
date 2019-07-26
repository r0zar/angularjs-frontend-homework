import angular from 'angular';

angular.module('app', [
    'ui.router',
    'landing',
    'components'
])
.config(configure);

function configure($locationProvider,) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}