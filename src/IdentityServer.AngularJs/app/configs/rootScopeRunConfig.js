(function () {

    angular.module('app')
        //O run config executa depois do config
        //E ante de qualquer outra estrutura
        .run(rootScopeRunConfig);

    rootScopeRunConfig.$inject = ['$rootScope'];

    function rootScopeRunConfig($rootScope) {

        //Tudo que colocamos no rootscope fica visivel para 
        //as estrutura que o module app contém

        $rootScope.cabecalho = 'Seja bem vindo ao sistema de controle de usuário - Cavalaria';
    }

})();