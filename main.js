var myApp = angular.module("myApp", []);
myApp.controller('dataCtrl', function ($scope, $http) {
    $http.get('http://ergast.com/api/f1/2017/driverStandings.json').then(function (response) {
        $scope.allInfo = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});