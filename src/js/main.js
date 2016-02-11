angular.module('corelogic.app', [
  'corelogic.config',
  'corelogic.controllers'
])

.config(['$localStorageProvider', '$httpProvider', 'COMPANY_NAME', 'PURGE_DONE', 'todoListProvider',
  function ($localStorageProvider, $httpProvider, COMPANY_NAME, PURGE_DONE, todoListProvider) {

    $httpProvider.interceptors.push('networkErrorInterceptor');
    $localStorageProvider.setKeyPrefix(COMPANY_NAME + "-");
    todoListProvider.purgeDone(PURGE_DONE);
    todoListProvider.setApiRoot('http://localhost:3000');

}]);
