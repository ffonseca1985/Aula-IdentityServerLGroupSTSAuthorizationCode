
(function () {

    //Vamos configurar inicialmento um 
    //receptor de requisições http

    angular.module('app')
        .config(interceptorHttp);

    //$httpProvider é IGUAL/O MESMO $http
    interceptorHttp.$inject = ['$httpProvider'];

    function interceptorHttp($httpProvider) {
        //Todo evento http
        //Será interceptado e enviado para a factory
        //interceptorFactory
        $httpProvider.interceptors.push('interceptorFactory');

        //interceptorFactory => é uma factory que iremos criar!!!
    }
})(); 