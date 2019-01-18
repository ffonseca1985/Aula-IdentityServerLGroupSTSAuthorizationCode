
(function () {
    
    angular.module('app')
        .controller('_usuarioController', _usuarioController);

    _usuarioController.$inject = ['oAuthFactory'];

    function _usuarioController(oAuthFactory) {

        var vm = this;

        vm.deslogar = deslogar;
        vm.usuario = oAuthFactory.infUsuario().usuario;

        function deslogar() {
            oAuthFactory.deslogar();
        }
    }

})();