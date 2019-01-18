(function () {

    angular.module('app')
        .directive('customHeader', customHeader);
    //No Html a diretiva irá ficar da seguinte forma
    //custom-header
    //Segue o modelo abaixo:
    //klsdsAsdsdfBssdf => klsds-asdsdf-bssdf

    function customHeader() {

        controller.$inject = ['$scope'];

        function controller($scope) {
            $scope.subTitulo = 'SubTitulo';
        }

        //O que uma diretiva???
        //Resposta: é uma tag customizada pelo angularjs
        //esta tag representa um html que podemos criar
        var directive = {
            restrict: 'AEC', //Que esta diretiva pode ser representada
            //como A => Atributo
            //como E => Elemento
            //como C => Classe
            //como T => Comentário
            controller: controller, //Não é obrigatório, mas podemos ter controller
            //Podemos passar valores de fora
            //'@' => Passar string sem referencia
            //'=' => Passar qquer coisa com referencia
            //Como passamos valores de fora?? Resposta: Atráves do scope
            scope: {
                //O cabecalho interno recebe o valor vindo de fora
                //referenciado pelo cabecalhoexterno
                cabecalhoInterno: '=cabecalhoexterno', //Valor que vem de fora
            },
            templateUrl: 'app/views/directives/customHeader.html'
        };

        //Não esqueça de retornar a directive!!
        return directive;
    }

})();