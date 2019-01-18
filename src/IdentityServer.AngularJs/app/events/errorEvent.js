
(function () {

    //loginFail: 'loginFail',
    //timeout: 'timeout',
    //serverError: 'serverError',
    //notFound: 'notFound',
    //notAuthenticate: 'notAuthenticate',
    //notAuthorized: 'notAuthorized'

    angular.module('app')
        .run(errorEvent);

    errorEvent.inject = ['erroConstant', '$rootScope', 'oAuthFactory'];

    function errorEvent(erroConstant, $rootScope, oAuthFactory) {

        $rootScope.$on('loginFail', loginFail);
        $rootScope.$on('timeout', timeout);
        $rootScope.$on('serverError', serverError);
        $rootScope.$on('notFound', notFound);
        $rootScope.$on('notAuthenticate', notAuthenticate);
        $rootScope.$on('notAuthorized', notAuthorized);

        function loginFail() {
            oAuthFactory.deslogar();
        }

        function notFound() {
            oAuthFactory.deslogar();
        }

        function notAuthenticate() {
            oAuthFactory.deslogar();
        }

        function notAuthorized() {
            oAuthFactory.deslogar();
        }

        function serverError() {
            swal('Ocorreu um erro na aplicação, contate o administrador do sistema ')
        }

        function timeout() {
            swal('Lentidão na Aplicação, favor tente mais tarde');
        }
    }

})();