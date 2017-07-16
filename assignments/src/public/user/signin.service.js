(function () {
"use strict";

angular.module('public')

.service('SignInService', SignInService);

function SignInService () {
    var service = this;
    service.useravailable = false;

    service.save = function (currentuser) {
      service.user = currentuser;
      service.useravailable = true;
    }
}
})()
