angular.module('corelogic.app', [
  'corelogic.config',
  'corelogic.controllers'
])

.config(['$localStorageProvider', 'COMPANY_NAME',
  function ($localStorageProvider, COMPANY_NAME) {

    $localStorageProvider.setKeyPrefix(COMPANY_NAME + "-");

}]);