
(function () {
    
    angular.module('app')
        //Só pra lembra
        //Config executa antes de TUDO!!!
        .config(getDataConfig); //getdata => o config executa o getData


    //OBS: no config só consigo injetar provider
    //getDataConfig.$inject = ['usuarioFactory'] => não consigo porque
                                            //o usuarioFactory é uma factory e não um provider       

    //quando injetamos um provider em um CONFIG
    //Temos que colocar o sufixo:Provider
    getDataConfig.$inject = ['getDataProvider'];

    function getDataConfig(getDataProvider) {
        //Estamos modificando o elemento pt-br
        //através da função pública update
        getDataProvider.update('pt-br');
    }

})();