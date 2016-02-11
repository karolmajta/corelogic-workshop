angular.module('corelogic.app', [
  'corelogic.config',
  'corelogic.controllers'
])

.config(['$localStorageProvider', '$httpProvider', 'RestangularProvider', 'COMPANY_NAME', 'PURGE_DONE', 'todoListProvider',
  function ($localStorageProvider, $httpProvider, RestangularProvider, COMPANY_NAME, PURGE_DONE, todoListProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');
    $httpProvider.interceptors.push('networkErrorInterceptor');
    $localStorageProvider.setKeyPrefix(COMPANY_NAME + "-");
    todoListProvider.purgeDone(PURGE_DONE);
    todoListProvider.setApiRoot('http://localhost:3000');

}]);
