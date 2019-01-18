(function () {

    angular.module('app')
        .run(routeEvent);

    routeEvent.$inject = ['$rootScope', '$state', 'oAuthFactory'];

    function routeEvent($rootScope, $state, oAuthFactory) {

        //Vamos sobreescrever o evento que muda de rota
        //Para analizar os eventos, ver documentação route-ui
        $rootScope.$on('$stateChangeSuccess', stateChanged);

        function stateChanged(event, toState, toParams, fromState, fromParams) {

            var estaLogado = oAuthFactory.estaLogado()

            //Se o usuário estiver logado e 
            //for para o login, automaticamente será redirecionado
            //para o cadastro(neste contexto a home)
            if (toState.name == 'login.signin' && estaLogado) {
                $state.go('usuario.cadastro');
            }
        }
    }

})();