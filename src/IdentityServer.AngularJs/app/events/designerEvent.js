
(function () {

    angular.module('app')
        .run(designerEvent);

    designerEvent.$inject = ['$rootScope'];

    function designerEvent($rootScope) {

        //Todo o evento de designer irá ser centralizado aqui
        //Logo este item será o ouvinte
        //Para este fim tenho que assinar este evento

        //Para facilitar a visualização do evento
        //Irei colocá-lo no $rootScope

        //1 - assinando um evento
        $rootScope.$on('profissaoDesignerEvent', profissaoDesignerEvent);

        //O metodo que será o evento
        //evt => informações do evento
        //dados => Itens que possa passar externamente
        function profissaoDesignerEvent(evt, dados) {
            swal('A profissão designer é inválida');
        }
    }

})();