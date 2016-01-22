angular.module('corelogic.controllers', ['corelogic.services'])
  .controller('pageController',
    ['$scope', 'GREETING', function ($scope, GREETING) {
      $scope.toast = GREETING;
    }]
  );
