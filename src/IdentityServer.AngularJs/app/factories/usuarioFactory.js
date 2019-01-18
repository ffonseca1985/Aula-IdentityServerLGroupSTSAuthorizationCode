
(function () {

    //Assim como o service o factory é um service
    //que sua estrutura é um object factory
    //ou seja, a forma mais simples de criar um objeto
    angular.module('app')
        .factory('usuarioFactory', usuarioFactory);

    //Por convensão usamos factory para criar objetos internos
    //e services para a comunicação externa(webservices)

    function usuarioFactory() {

        var factory = {
            usuario: {}
        };

        return factory;
    }
    
})();