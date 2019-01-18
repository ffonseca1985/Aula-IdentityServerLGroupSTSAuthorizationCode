
(function () {

    var jsonErro = {
        loginFail: 'loginFail',
        timeout: 'timeout',
        serverError: 'serverError',
        notFound: 'notFound',
        notAuthenticate: 'notAuthenticate',
        notAuthorized: 'notAuthorized'
    };

    angular.module('app')
        .constant('erroConstant', jsonErro);

})();