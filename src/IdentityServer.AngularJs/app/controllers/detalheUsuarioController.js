
(function () {

    angular.module('app')
        .controller('detalheUsuarioController', detalheUsuarioController);


    detalheUsuarioController.$inject = ['$scope', 'usuarioFactory'];

    function detalheUsuarioController($scope, usuarioFactory) {

        //Como o usuarioFactory foi preenchido na controller anterior
        //Ele ja vai vir preenchido
        $scope.usuarioSelecionado = usuarioFactory.usuario;
    }
})();
