import filterMenuTemplate from './filterMenu.html';

const bindings = {
    sort: '=',
    name: '=',
}

angular.module('filterMenu', [])
.component('filterMenu', {
    template: filterMenuTemplate,
    bindings
})