
(function () {

    angular.module('app')
        .provider('getData', getData);

    function getData() {
        //variavel privada
        var _location = 'pt-br';
        //Variável pública
        this.update = function (location) {
            _location = location;
        }

        //Nos providers existe uma função auto-executável
        //Vai executar independente da interação do usuário
        //A função this.$get sempre será executada quando for 
        //Referenciada!!!
        this.$get = function () {
            //Vou retornar uma data
            return {
                dia: _location == 'pt-br' ? new Date().getDay('dd') 
                                          : new Date().getDay('dd') - 1, //Dia
                mes: new Date().getMonth() + 1, //Coloquei + 1, 
                                                //porque em js o primeiro mês começa com zero,
                ano: new Date().getFullYear()   //Ano
            }
        }
    }
})();