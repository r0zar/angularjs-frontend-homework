function HotelService($http) {
    'ngInject';

    this.get = function() {
        let url = 'https://homework-app.rocketmiles.com/fe-homework/rates'
        return $http.get(url)
            .then(function(response) {
                return response.data;
            })
            .catch(() => $http.get(url).then(response => response.data))
    }
}

export { HotelService };
