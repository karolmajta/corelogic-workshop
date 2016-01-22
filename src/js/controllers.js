angular.module('corelogic.controllers', ['corelogic.services', 'corelogic.rest-services'])
    .controller('pageController',
      ['$scope', 'GREETING', 'API_URL', function ($scope, GREETING, API_URL) {
        $scope.toast = GREETING;
        $scope.apiUrl = API_URL;
      }]
    );
