/*global angular*/
(function () {
    // Use strict pour controler qu'on ne fait pas du JS dégueulasse qui plantera sans nous le dire.
    // A inclure dans chaque fonction utilisées...
    'use strict';
    
    // La on déclare notre module apiChallenge qui sera notre application principale.
    // Angular est modulaire par défaut, il vaut mieux tout séparer en modules, c'est + propre :).
    // angular.module('', [dependances]) pour setter un module, angular.module('') pour le getter 
    angular
        .module('apiChallenge', [
            'famous.angular',
            'apiChallenge.config',
            'apiChallenge.routes',
            'apiChallenge.api-lol',
            'apiChallenge.layouts'
        ]);
    
    //Par ex: Module qui va gérer la config d'angular pour le module "apiChallenge"
    angular
        .module('apiChallenge.config', []);
    // La on inclut ngRoute parce que c'est lui gère les routes
    angular
        .module('apiChallenge.routes', ['ui.router']);
    angular
        .module('apiChallenge.api-lol', []);
    angular
        .module('apiChallenge.layouts', []);
}());