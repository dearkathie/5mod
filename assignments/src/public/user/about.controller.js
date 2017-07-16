
(function () {
"use strict";

angular.module('public')
.controller('AboutController', AboutController);

AboutController.$inject = ['user', 'useravailable', 'ApiPath'];
function AboutController(user, useravailable, ApiPath) {
  var controller = this;
  controller.user = user;
  controller.useravailable = useravailable;
}

})();
