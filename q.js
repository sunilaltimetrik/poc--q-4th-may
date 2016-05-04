angular.module('myModule', [])

  .factory('GameWorld', function($q, $timeout) {

    var getGList = function() {
      var deferred = $q.defer();

      $timeout(function() {
        deferred.resolve(['Cricket', 'Hocky', 'Bollybol', 'Polo', 'Tennis']);
      }, 1000);

      return deferred.promise;
    };

    return {
      getGList: getGList
    };

  })

  .controller('GameCtrl', function($scope, GameWorld) {

    $scope.games = GameWorld.getGList();

  });