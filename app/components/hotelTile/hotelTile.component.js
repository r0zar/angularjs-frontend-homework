import hotelTileTemplate from './hotelTile.html';

angular.module('hotelTile', [])
.component('hotelTile', {
    template: hotelTileTemplate,
    bindings: {
        hotel: '<'
    }
})