(function() {
    'use strict';

    angular
      .module('app')
      .factory('DB', DB);

    DB.$inject = ['$q', 'DB_CONFIG'];

    function DB($q, DB_CONFIG) {

        var dbservice = {
            init: init,
            query: query,
            fetchAll: fetchAll,
            fetch: fetch,
            insertCollection:insertCollection
        }

        
        var self = this;
        self.db = null;

        function init() {
            // Use self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name}); in production
            self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

            angular.forEach(DB_CONFIG.tables, function(table) {
                var columns = [];

                angular.forEach(table.columns, function(column) {
                    columns.push(column.name + ' ' + column.type);
                });

                var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
                dbservice.query(query);
            });

        };

        function query(query, bindings) {
            bindings = typeof bindings !== 'undefined' ? bindings : [];
            var deferred = $q.defer();

            self.db.transaction(function(transaction) {
                transaction.executeSql(query, bindings, function(transaction, result) {
                    deferred.resolve(result);
                }, function(transaction, error) {
                    deferred.reject(error);
                });
            });

            return deferred.promise;
        };

        function fetchAll(result) {
            var output = [];

            for (var i = 0; i < result.rows.length; i++) {
                output.push(result.rows.item(i));
            }
            
            return output;
        };

        function fetch(result) {
            return result.rows.item(0);
        };
        function insertCollection(query, bindings) {
            var q = $q.defer();
            var coll = bindings.slice(0); // se clona la coleccion

            self.db.transaction(function (tx) {
              (function insertOne() {
                var record = coll.splice(0, 1)[0]; // obtiene el primer registro y reduce uno
                try {
                  tx.executeSql(query, record, function (tx, result) {
                    if (coll.length === 0) {
                      q.resolve(result);
                    } else {
                      insertOne();
                    }
                  }, function (transaction, error) {
                    q.reject(error);
                    return;
                  });
                } catch (exception) {
                  q.reject(exception);
                }
              })();
            });
            return q.promise;
          };

        return dbservice;
    }

})();
