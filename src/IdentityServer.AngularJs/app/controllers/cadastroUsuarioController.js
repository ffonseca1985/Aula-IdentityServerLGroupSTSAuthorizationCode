(function () {

    //Precisamos definir qual module a controllers pertence
    //angular.module('app', []) => Estou gerando um novo module
    //angular.module('app') => Estou pegando um já existente

    //sempre preciso dizer qual é o module
    angular.module('app')
        //Estrutura da controller
        //Nome +  function (delegate)
        .controller('cadastroUsuarioController', cadastroUsuarioController);

    //Para chamar um service basta referencia-lo!!!
    //Para que nós podermos usar os filter
    //Temos dois jeitos:
    //Filter + filter
    //Exemplo:usuarioByFilter
    //ou
    //Podemos usar o $filter => carrega todos os filtros em memória (é mais lento)
    cadastroUsuarioController.$inject =
        [
            '$scope',
            'usuarioService',
            'usuarioFactory',
            '$state',
            'getData',
            'profissaoService',
            '$rootScope',
            'usuarioByFilter',
            '$filter'
        ];

    //SE INJETAMOS LÁ EM CIMA TEMOS QUE INJETAR NA CONTROLLER

    //Como estamos em uma controller não precisamos
    //colocar getDataProvider somente getData

    //getData + Provider => Só em Config!!!!!
    function cadastroUsuarioController($scope, usuarioService,
        usuarioFactory, $state, getData, profissaoService, $rootScope, 
        usuarioByFilter, $filter) {

        //No getData vem o resultado do $get (SEMPRE!!!)

        //$location => é responsável por redirecionar uma rota
        //Para a outra, mantendo a função de singlePage

        //Como o get é uma promise teremos que construir uma arquitura que 
        //suporte promises
        usuarioService.get()
            .then(sucesso, erro);
        profissaoService.get().then(sucessoProfissao, erroProfissao);

        $scope.$watch('usuario.profissao', watchProfissao);

        function watchProfissao(novoValor, velhoValor) {

            if (novoValor == undefined)
                return;

            if (novoValor.id == 3) {
                $rootScope.$broadcast('profissaoDesignerEvent');
                //Voltando ao antigo valor;
                $scope.usuario.profissao = velhoValor;
            }
        }


        function sucessoProfissao(response) {
            $scope.profissoes = response.data;
            //usuario.profissao = $scope.profissoes[0];
        }

        function erroProfissao() {
            swal('Erro ao consultar as profissões');
        }

        //Callback de retorno
        function sucesso(response) {
            $scope.usuarios = response.data;

            //Podemos usar os filters na controller usando a seguinte nomenclatura
            var comFilter = usuarioByFilter(response.data, 1990);
            var com$Filter = $filter('usuarioBy')(response.data, 1980);

        }
        //Callback de erro, caso houver
        function erro(response) {
            //Depois iremos usar o sweetAlert
            alert('Erro ao Listar os usuários');
        }

        $scope.add = add;
        $scope.redirecionarDetalhe = redirecionarDetalhe;

        function redirecionarDetalhe(usuario) {

            //Quando colocamos algo na factory 
            //Os valores irão permanecer em todos 
            //itens(controllers, services, etc) de app
            usuarioFactory.usuario = usuario;
            
            //Estamos usando o state para redirecionar o usuário
            //PAra este fim usamos o metodo go + nome do state (ver routeConfig)
            $state.go('usuario.cadastro');
        }

        function add(usuario) {
            //Estamos atualizando a lista de usuarios
            //Se não colocarmos copy ele irá sempre pegar o mesmo
            //pois esta com referencia
            //$scope.usuarios.push(angular.copy(usuario));
            //Estamos colocando o usuario na usuarioFactory
            //usuarioFactory.usuario = usuario;

            
            var copy = angular.copy(usuario);
            //Limpar o formulário
            $scope.usuario = {};
            //Voltar ao estado inicial do formulario
            $scope.formularioCadastro.$setPristine(true);

            usuarioService.post(copy).then(
                //Também podemos colocar o sucess e o error dentro do then
                function (response) {
                    $scope.usuarios = response.data;
                    swal('Usuário', 'usuario adicionado com sucesso', 'success');
                },
                function (response) {
                    swal('Erro ao cadastrar um usuário');
                });

        }
    }


})();