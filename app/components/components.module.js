import angular from 'angular';

require('./hotelTile/hotelTile.component')
require('./filterMenu/filterMenu.component')

angular.module('components', [
    'hotelTile',
    'filterMenu'
])