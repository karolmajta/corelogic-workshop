angular.module('corelogic.controllers', ['corelogic.config'])
    .controller('pageController',
      ['$scope', 'COMPANY_NAME', 'URL', function ($scope, COMPANY_NAME, URL) {
        $scope.toast = "Hello " + COMPANY_NAME;
        $scope.apiUrl = URL;
      }]
    );
