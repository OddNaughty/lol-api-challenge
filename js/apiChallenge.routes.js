(function () {
    'use strict';
    
    angular
        .module('apiChallenge.routes')
        .config(config);
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');
        $stateProvider
            .state('index', {
                url: '',
                templateUrl: 'templates/index.html',
                controller: 'IndexCtrl',
                controllerAs: 'vm'
            });
    }
}());