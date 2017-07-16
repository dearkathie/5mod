(function () {
"use strict";

angular.module('public')
.controller('SignInController', SignInController);

SignInController.$inject = ['$http', 'ApiPath', 'SignInService']
function SignInController($http, ApiPath, SignInService) {
  var controller = this;
  controller.showform = true;

  controller.submit = function () {
    return $http.get(ApiPath + '/menu_items/'+ controller.user.favoritedish + '.json').then(function (response) {
      controller.showform = false;
      controller.showsuccess = true;
      SignInService.save(controller.user);
      return response.data;
    }).catch(function () {
      controller.message = true;
    });
  }
}


})();
