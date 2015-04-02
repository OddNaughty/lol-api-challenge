(function () {
    'use strict';
    
    angular
        .module('apiChallenge.layouts.controllers')
        .controller('IndexCtrl', IndexCtrl);
    
    IndexCtrl.$inject = ['$http', 'LolAPI'];
    
    function IndexCtrl($http, LolAPI) {
        var vm = this;
        vm.servers = ["na", "euw"];
        vm.summonerServer = "na";
        vm.summonerName = "froggen";
        vm.gridOptions = {
            dimensions: [],
            transition: {
                curve: 'easeInOut',
                duration: 2000
            }
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
        
        vm.getMatchesById = function (id) {
            LolAPI.getMatchesById(vm.summonerServer, id)
                .success(function (data) {
                    vm.gridOptions.dimensions = [1, data.matches.length];
                    vm.scores = [];
                    angular.forEach(data.matches, function (value, index) {
                        vm.scores.push({win: value.participants[0].stats.winner ? "win" : "lost"});
                    });
                });
        };
        
        vm.changeDimensions = function () {
            console.log('clicked: ');
            vm.gridOptions.dimensions = [vm.gridOptions.dimensions[1], vm.gridOptions.dimensions[0]]; 
        };
    }
}());