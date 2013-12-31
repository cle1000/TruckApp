var app = angular.module('truckApp', []);

function InputDataCtrl($scope, $http) {
     $scope.loadData = function() {
     $http.jsonp('http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK'
     ).then(function(response) {
     $scope.inputDatas = response.data;
     getData();
     });
     };

    $scope.loadData();
}

function sendData(formId) { 
	//validation Code
    $.ajax( {
            type: 'POST',
            url: 'http://mtoserver.dyndns.org/mto/formToMail.php',
            data: $("#"+formId).serialize(), 
            success: function(data) {
                alert("data send");
            }
        } );
	header('Location: index.html');
    }

