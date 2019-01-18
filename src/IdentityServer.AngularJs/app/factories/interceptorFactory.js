
(function () {
    
    angular.module('app')
        .factory('interceptorFactory', interceptorFactory);

    interceptorFactory.$inject = ['localStorageService', '$q', 'erroConstant', '$rootScope'];

    function interceptorFactory(localStorageService, $q, erroConstant, $rootScope) {

        //O interceptor é uma receita de bolo!!!!
        //Tem os seguintes itens:
        //request => intercepta o request
        //response => intercepta o response
        //responseError => intercepta o erro do response
        //requestError => intercepta o erro do request
        
        //Tem que ser assim!?!?!
        //Pq??
        //Pq o angular quis, aceita!!

        //Request => O envio da mensagem para o servidor
        //Response => O retorno da mensagem/Retorno do request

        var factory = {
            request: function (dataRequest) {

                //Precisamos para toda a requisição enviar
                //o token
                var session = localStorageService.get('dadosAutenticacao');

                if (session != null)
                    dataRequest.headers['Authorization'] = 'bearer ' + session.token;

                return dataRequest; //Tenho que retornar
                //Porque se não para o ciclo de vida
            },
            response: function (dataResponse) {

                return dataResponse; //Tenho que retornar
                //Porque se não para o ciclo de vida
            },
            responseError: function (dataResponse) {

                //loginFail: 'loginFail',
                //time,out: 'timeout',
                //serverError: 'serverError',
                //notFound: 'notFound',
                //notAuthenticate: 'notAuthenticate',
                //notAuthorized: 'notAuthorized'

                var dictionaryHttpStatusCode = {
                    401: erroConstant.notAuthorized,
                    403: erroConstant.notAuthenticate,
                    419: erroConstant.timeout,
                    500: erroConstant.serverError,
                    404: erroConstant.notFound
                };

                var evento = dictionaryHttpStatusCode[dataResponse.status];

                $rootScope.$broadcast(evento, dataResponse);

                return $q.reject(dataResponse);
            }
        };

        return factory;
    }

})();