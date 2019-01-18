(function () {

    angular.module('app')
        .service('oAuthService', oAuthService);

    oAuthService.$inject = ['$http', 'apiConstant'];

    function oAuthService($http, apiConstant) {

        this.logar = logar;

        function logar(login) {
            //No logar temos que definir um fluxo de autenticação
            //Exemplo de Fluxo:
            //Implicit
            //Authorization Code
            //Resource Owner
            //Hibrid
            //O que iremos escolher é o Resource Owner

            //Conforme feito no postma
            //Obs:& => caracter especial que separa os dados
            var dados = 'grant_type=password&userName=' + login.nome +
                '&password=' + login.senha + "&client_id=123456&client_secret=123456";

            var url = apiConstant + 'login';

            var promise = $http.post(url, dados, {
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            });

            return promise;
        }
    }

})();