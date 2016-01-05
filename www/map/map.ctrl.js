(function(){
  'use strict';
  angular
  .module('app')
  .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['$scope','MapSrv'];
  function MapCtrl($scope, MapSrv){
    var vm = {};
    $scope.vm = vm;

    function activate(){
      google.maps.event.addDomListener(window, 'load', MapSrv.showGeolocation);
    }
    activate();

    function mapDestination(){
      return MapSrv.getDestination()
      .then(function(data) {
        vm.des = data[0];
        return vm.destination;
      });
    }
    mapDestination();

    function getMapCenter(){
      MapSrv.showGeolocation(); 
    }

    $scope.goToLocation = function(){
      getMapCenter();
    };

  }
})();
