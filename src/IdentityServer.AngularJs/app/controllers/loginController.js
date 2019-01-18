(function () {

    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['oAuthFactory', '$state'] 

    function loginController(oAuthFactory, $state) {

        var self = this; //This é o contexto da controller
                         //Se paramos para pensar é o "scope"

        self.logar = logar;

        function logar(login) {

            oAuthFactory.
                logar(login).
                then(successLogin, failLogin);

            function successLogin(response) {
                //Se der certo vamos redirecionar para a home
                $state.go('usuario.cadastro');
            }

            function failLogin(response) {
                //Se der errado vamos informar para o usuário o erro
                self.status = response.data.error_description;
            }
        }
    }
})();