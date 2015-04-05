(function () {
    'use strict';

    angular
        .module('reusable-module', [
            'reusable-module.directives'
        ]);
    
    angular
        .module('reusable-module.directives', []);
}());