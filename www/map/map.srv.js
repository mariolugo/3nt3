(function(){
  'use strict';
  angular
  .module('app')
  .factory('MapSrv', MapSrv);

  MapSrv.$inject = ['$http','$q','$window'];
  function MapSrv($http,$q,$window){
    var map,currentPositionMarker,mapCenter = new google.maps.LatLng(14.668626, 121.24295);
    var service = {
      showGeolocation: showGeolocation,
      initLocationProcedure: initLocationProcedure,
      initializeMap: initializeMap
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
        $window.navigator.geolocation.watchPosition(function(position) {
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

    // current position of the user
    function setCurrentPosition(pos) {
        currentPositionMarker = new google.maps.Marker({
            map: map,
            icon: 'images/icon.png',
            position: new google.maps.LatLng(
                pos.coords.latitude,
                pos.coords.longitude
            ),
            title: "Current Position"
        });
        map.panTo(new google.maps.LatLng(
                pos.coords.latitude,
                pos.coords.longitude
            ));
        console.log('Latitud: '+pos.coords.latitude + ', Longitud: '+pos.coords.longitude);
    }
    function displayAndWatch(position) {
     
        // set current position
        setCurrentPosition(position);
         
        // watch position
        watchCurrentPosition();
        console.log('Latitud: '+position.coords.latitude + ', Longitud: '+position.coords.longitude);

    }
    function watchCurrentPosition() {
        var positionTimer = navigator.geolocation.watchPosition(
            function (position) {
                setMarkerPosition(
                    currentPositionMarker,
                    position
                );
            });
    }
    function setMarkerPosition(marker, position) {
        marker.setPosition(
            new google.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude)
        );
    }
    function initLocationProcedure() {
        initializeMap();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(displayAndWatch, locError);
        } else {
            // tell the user if a browser doesn't support this amazing API
            alert("Your browser does not support the Geolocation API!");
        }
    }

    function initializeMap(){
        map = new google.maps.Map(document.getElementById('map'), {
           zoom: 18,
           center: mapCenter,
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           disableDefaultUI: true
         });
    }

    function locError(error) {
        // tell the user if the current position could not be located
        alert("The current position could not be found!");
    }


  };  
})();
