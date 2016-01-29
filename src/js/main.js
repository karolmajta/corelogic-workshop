angular.module('corelogic.app', [
  'corelogic.config',
  'corelogic.controllers'
])

.config(['$localStorageProvider', 'COMPANY_NAME', 'todoListProvider',
  function ($localStorageProvider, COMPANY_NAME, todoListProvider) {

    $localStorageProvider.setKeyPrefix(COMPANY_NAME + "-");
    todoListProvider.purgeDone(true);

}]);