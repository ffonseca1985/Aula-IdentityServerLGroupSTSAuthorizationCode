
(function () {

    angular.module('app')
        .filter('usuarioBy', usuarioBy);

    //O que o filter??
    //Resposta1: Estruturalemente é uma função que retorna outra função
    //Resposta2: Conceitualmente é um modificador (transforma uma coisa em outra coisa)
    function usuarioBy() {

        //O que agente para um filtro
        //Basicamente uma coleção de itens + o que vc quer fazer
        //O que vamos fazer
        var filter = function (itens, ano) {

            if (itens == undefined)
                return;

            if (ano == undefined || ano == '')
                return itens;

            var itensFiltrados = [];

            for (var i = 0; i < itens.length; i++) {
                //Todos os itens que tiverem datas acima de uma determinada data serão filtradas
                var data = new Date(itens[i].dataNascimento);

                if (data.getFullYear() >= ano) {
                    itensFiltrados.push(itens[i]);
                    itens[i].nome = itens[i].nome.toLowerCase();
                }
            }

            return itensFiltrados;
        }

        return filter;
    }

})();