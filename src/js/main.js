angular.module('corelogic.app', [
  'corelogic.config',
  'corelogic.controllers'
])

.config(['$localStorageProvider', 'COMPANY_NAME', 'PURGE_DONE', 'todoListProvider',
  function ($localStorageProvider, COMPANY_NAME, PURGE_DONE, todoListProvider) {

    $localStorageProvider.setKeyPrefix(COMPANY_NAME + "-");
    todoListProvider.purgeDone(PURGE_DONE);
    todoListProvider.setApiRoot('http://localhost:3000');

}]);
