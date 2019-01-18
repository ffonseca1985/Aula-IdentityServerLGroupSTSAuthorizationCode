
(function () {
    
    angular.module('app')
        .service('usuarioService', usuarioService);

    //Todo service é uma função construtora, ou seja,
    //devemos ter o this nas propriedades

    //Para comunicarmos com um servidor remoto via json
    //Precisamos do serviço $http
    //Para este fim vamos injetá-lo na controller

    usuarioService.$inject = ['$http', 'apiConstant'];

    //apiConstant => é um service do tipo constant
    function usuarioService($http, apiConstant) {
        
        this.get = get;
        this.post = post;

        function get() {

            //var usuario = [
            //    { nome: 'Fabio', idade: 30 },
            //    { nome: 'Napoleao', idade: 32 },
            //    { nome: 'Rodrigo', idade: 33 },
            //    { nome: 'Wesley', idade: 34 },
            //];

            //return usuario;

            var path = apiConstant + 'usuario';
            var promise = $http.get(path);

            return promise;
        }

        function post(usuario) {

            var path = apiConstant + 'usuario';
            //No post o model vai após o path
            //Modelo: $http.post({api}, {model})
            var promise = $http.post(path, usuario);

            return promise;
        }
    }

})();