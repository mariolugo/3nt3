(function(){
  'use strict';
  angular
  .module('app')
  .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ['$scope','MapSrv', 'sockets'];
  function MapCtrl($scope, MapSrv,sockets){
    var vm = {};
    $scope.vm = vm;
    vm.mario;

    function activate(){
      google.maps.event.addDomListener(window, 'load', MapSrv.initLocationProcedure);
    }
    activate();

    function getMapCenter(){
      MapSrv.showGeolocation(); 
    }

    $scope.goToLocation = function(){
      getMapCenter();
    };

    sockets.on('news', function (data) {
      console.log(data);
      vm.mario = data;
      sockets.emit('my other event', {my: 'data'})
    });


    

 }
})();
