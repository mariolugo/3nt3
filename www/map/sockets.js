(function(){
  'use strict';
  angular
  .module('app')
  .factory('sockets', sockets);

  sockets.$inject = ['$rootScope'];
  function sockets($rootScope){
    // var service = {
    //   showGeolocation: showGeolocation,
    //   initLocationProcedure: initLocationProcedure,
    //   initializeMap: initializeMap
    // };

    // return service;

    var socket = io.connect('http://localhost:4000/');
    return {
      on: function (eventName, callback) {
        socket.on(eventName, function () {  
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      }
    };



  };  
})();
