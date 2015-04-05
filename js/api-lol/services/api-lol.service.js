(function () {
    'use strict';
    
    var apiKey = "d053708b-6f3b-4a2f-a17d-7fe500178be6";
    
    angular
        .module('apiChallenge.api-lol.services')
        .factory("LolAPI", LolAPI);
    
    LolAPI.$inject = ['$http'];
    
    function LolAPI($http) {
        var ret = {
            getSummonerByName: getSummonerByName,
            getMatchesById: getMatchesById
        };
        
        return ret;
        
        function getSummonerByName(server, name) {
            var url = 'https://' + server + '.api.pvp.net/api/lol/' + server + '/v1.4/summoner/by-name/' + name + '?api_key=' + apiKey;
            var promise = $http.get(url).then(function(response) {
                return response.data;
            });
            return promise;
        }
        
        function getMatchesById(server, id) {
            var url = 'https://' + server + '.api.pvp.net/api/lol/' + server + '/v2.2/matchhistory/' + id + '?api_key=' + apiKey;
            return $http.get(url);
        }
    }
    
}());