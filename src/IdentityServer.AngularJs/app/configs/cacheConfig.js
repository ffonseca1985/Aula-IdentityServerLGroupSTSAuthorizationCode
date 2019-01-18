(function () {
    angular.module('app')
            .config(['$httpProvider', cacheConfig]);

    function cacheConfig($httpProvider) {
        // inicializa ganho se não há
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        // Porque os erros relacionados com o browser versão anterior do código introduzidas
        // desativar IE pedido ajax caching
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }

})();