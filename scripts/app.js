var app = angular.module('truckApp', []);

function showAlert(message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}

function InputDataCtrl($scope, $http) {

    $scope.goHome = function() {
        $.mobile.changePage("#home");
    };

    $scope.loadData = function() {
        $http.jsonp('http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK').then(function(response) {
            $scope.inputDatas = response.data;
        });
    };


    $scope.saveUserInfos = function() {
        window.localStorage.setItem("name", $scope.username);
        window.localStorage.setItem("telephone", $scope.userphone);
    };


    $scope.sendData = function(formId) {
        var form = document.getElementById(formId);

        $scope.saveUserInfos();

        $.ajax({
            type: 'POST',
            url: 'http://mtoserver.dyndns.org/mto/formToMail.php',
            data: $("#" + formId).serialize(),
            success: function(data) {

            }
        });

        $scope.goHome();
        showAlert("Die Mitarbeiter von MTO melden sich in Kürze", "Info");
    };

    $scope.setNameAndTelephone = function() {
        var name = window.localStorage.getItem("name");
        var phone = window.localStorage.getItem("telephone");

        if (name == 'null' || name == 'undefined') {
            name = '';
        }
        if (phone == 'null' || phone == 'undefined') {
            phone = '';
        }
        $scope.username = name;
        $scope.userphone = phone;
    };
    $scope.loadData();
    $scope.setNameAndTelephone();

}
