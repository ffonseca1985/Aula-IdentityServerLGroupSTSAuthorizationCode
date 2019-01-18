(function () {

    angular.module('app')
        .service('profissaoService', profissaoService);

    //Vamos simular uma consulta com promises
    profissaoService.$inject = ['$q'];

    function profissaoService($q) {
        
        this.get = get;

        function get() {

            //Criar a estrutura de promises
            var defer = $q.defer();

            var profissoes = {}; //Criei um objeto
            
            //data dinamico
            profissoes.data = [
                { id: 1, nome: 'Desenvolvedor' },
                { id: 2, nome: 'DBA' },
                { id: 3, nome: 'Designer' },
            ];

            //Estou dizendo que deu tudo certo
            //Vai no success do then
            defer.resolve(profissoes);

            //retornando uma promise para simular
            //um retorno assincrono
            return defer.promise;
        }
    }

})();