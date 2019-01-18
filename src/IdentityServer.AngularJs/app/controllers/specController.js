(function () {

    angular.module('app', [])
        .controller('specController', specController);

    specController.$inject = ['$scope'];

    function specController($scope) {

        $scope.primeiraVar = '';
        $scope.testarVar = testarVar;

        function testarVar() {

            if ($scope.primeiraVar == '') {
                $scope.resultado = 'Vazia';
            }
            else if ($scope.primeiraVar == 'teste') {
                $scope.resultado = 'teste';
            }
            else
                $scope.resultado = 'outro valor';
        }
    }
})();