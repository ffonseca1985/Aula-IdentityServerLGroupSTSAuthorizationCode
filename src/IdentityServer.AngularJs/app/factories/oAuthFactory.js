(function () {

    angular.module('app')
        .factory('oAuthFactory', oAuthFactory);

    oAuthFactory.$inject = ['oAuthService', 'localStorageService',
    '$q', '$location', 'jwtHelper'];

    //Aqui fica a regra de negocio da autenticação e autorização
    function oAuthFactory(oAuthService, localStorageService,
        $q, $location, jwtHelper) {

        var factory = {
            logar: logar,
            deslogar: deslogar,
            infUsuario: infUsuario,
            estaLogado: estaLogado
        };

        //Precisamos retornar a factory
        return factory;

        function estaLogado() {
            return factory.infUsuario() != null; //Esta é uma expressão!!
                                                 //retorna true ou false                   
        }

        function logar(login) {
            //Passos:
            //Vai adicionar o login no oAuthService
            //Vai pegar o token e guardar em um localStorage
            //Caso não logar fazer loggof e ir para a página de login

            //Como estou em uma estrutura assincrona, precisamos
            //usar uma promise
            var defer = $q.defer();

            oAuthService.logar(login)
                .then(successLogin, failLogin);
             
            function successLogin(response) {
                //defer.resolve
                //Localstorage é um dicionário => {chave, valor}
                //Nele podemos persistir os dados no cliente (browser)
                localStorageService.set('dadosAutenticacao',
                {
                        token: response.data.access_token,
                        usuario: jwtHelper.decodeToken(response.data.access_token)
                });

                defer.resolve(response);
            }
            function failLogin(response) {
                //defer.reject
                //Estou falando para quem chama que deu erro!!!
                defer.reject(response);
            }

            return defer.promise;
        }

        function deslogar() {
            //Remover o token do usuario e redirecionar para o login
            localStorageService.remove('dadosAutenticacao');
            //Redirecionando para o login
            $location.path('/');
        }

        function infUsuario() {
            return localStorageService.get('dadosAutenticacao');
        }
    }
})();