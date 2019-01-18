
(function () {

    angular.module('app')

    //Se quisermos executar algo antes de tudo
    //Temos que usar o item config
    .config(routeConfig);

    
    //ngRoute
    //$stateProvider => ele que define a rota
    //$urlRouteProvider => ele contém a inicialização da rota
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login/signin');

        //Com o $stateProvider conseguimos fazer master pages
        $stateProvider.state('login', {
            templateUrl: 'app/shared/master/_login.html',
            abstract: true, //Estou dizendo que é uma masterPage
            url: '/login'
        }).state('login.signin', { //Padrão: 'master.pagina'
                // a url ficará assim: /login/signin//
                templateUrl: 'app/views/login.html',
                controller: 'loginController',
                controllerAs: 'vm',//colocamos alias, pois estamos usando o this na controller
                url: '/signin'
        }).state('usuario', { //Padrão: 'master.pagina'
            //Url: usuario/
            templateUrl: 'app/shared/master/_usuario.html',
            abstract: true,
            url: '/usuario',
            controller: '_usuarioController',
            controllerAs: 'vm'
        }).state('usuario.cadastro', {
            templateUrl: 'app/views/CadastroUsuario.html',
            url: '/cadastro',
            controller: 'cadastroUsuarioController'
        }).state('usuario.callback', {
            templateUrl: '/callback',
            controller: 'usuarioCallbackController'
        });
    }

})();