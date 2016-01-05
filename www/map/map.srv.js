(function(){
  'use strict';
  angular
  .module('app')
  .factory('MapSrv', MapSrv);

  MapSrv.$inject = ['$http','$q','$window'];
  function MapSrv($http,$q,$window){
    var map;
    var service = {
      getDestination: getDestination,
      showGeolocation: showGeolocation
    };

    return service;

    function getDestination(){
      return $http.get('http://localhost:8100/data/destination.json')
          .then(getDataDestination)
          .catch(getDataDestinationFailed);

      function getDataDestination(response) {
          return response.data;
      }

      function getDataDestinationFailed(error) {
          console.log('fallo');
      }
    }

    function showGeolocation() {
      var infoWindow = new $window.google.maps.InfoWindow({map: map});
      if ($window.navigator.geolocation) {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
          map = new $window.google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 18,
            disableDefaultUI: true,
            icon: 'images/icon.png'
          });
          var marker = new $window.google.maps.Marker({
            position: {lat: position.coords.latitude, lng: position.coords.longitude},
            icon: 'images/icon.png',
            map: map
          });
          
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }      
    }

  };  
})();
