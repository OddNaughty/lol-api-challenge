(function () {
    'use strict';
    
    angular
        .module('apiChallenge.layouts.controllers')
        .controller('IndexCtrl', IndexCtrl);
    
    IndexCtrl.$inject = ['$http', 'LolAPI'];
    
    function IndexCtrl($http, LolAPI) {
        var vm = this;
        vm.servers = ["na", "euw"];
        vm.summonerServer = "euw";
        vm.summonerName = "OdNaughty";
        vm.gridOptions = {
            dimensions: []
        };
        vm.scores = [];

        vm.getSummonerId = function () {
            LolAPI.getSummonerByName(vm.summonerServer, vm.summonerName)
                .success(function (data) {
                    var realDatas = data[Object.keys(data)[0]];
                    var summonerId = realDatas.id;
                    vm.getMatchesById(summonerId);
                })
                .error(function(data) {
                    console.log("ERROR", data);
                });
        };
        
        vm.getMatchesById = function(id) {
            LolAPI.getMatchesById(vm.summonerServer, id)
                .success(function (data) {
                    vm.gridOptions.dimensions = [1, data.matches.length];
                    vm.scores = [];
                    angular.forEach(data.matches, function (value, index) {
                        console.log(index, value.participants[0].stats.winner);
                        vm.scores.push(value.participants[0].stats.winner);
                    });
                });
        }
    };
}());