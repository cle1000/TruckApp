var app = angular.module('truckApp', []);

/*app.controller('InputDataCtrl', function($scope, $http) {
 $http.jsonp( 'http://localhost/mto/sql.php?callback=JSON_CALLBACK'
 ).then( function ( response ) {
 $scope.inputDatas = response.data;
 });
 });
 */




function InputDataCtrl($scope, $http) {
     $scope.loadData = function() {
     $http.jsonp('http://localhost/mto/sql.php?callback=JSON_CALLBACK'
     ).then(function(response) {
     $scope.inputDatas = response.data;
     getData();
     });
     };
/*
    $scope.loadData = function() {
         $.jsonp({
            url: 'http://mtoserver.dyndns.org/mto/sql.php',
            callbackParameter: 'callback',
            success: function(data, status) {
                alert(JSON.stringify(data));
            },
            error: function() {
                alert("error");
            }
        });
    };
*/

    $scope.reloadData = function() {
        for (i = 0; i < $scope.inputDatas.length; i++) {
            $scope.inputDatas.splice(i);
        }
        $http.jsonp('http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK'
                ).then(function(response) {

            for (i = 0; i < response.data.length; i++) {
                $scope.inputDatas.push(response.data[i]);
            }
        });

    };
    $scope.loadData();
}

