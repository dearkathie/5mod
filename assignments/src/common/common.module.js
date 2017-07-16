(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://protected-shelf-11070.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
