var app = angular.module('truckApp', []);

function InputDataCtrl($scope, $http) {
	$scope.loadData = function() {
		$http.jsonp('http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK').then(function(response) {
			$scope.inputDatas = response.data;
		});
	};

	$scope.setFirstStart = function() {
		window.localStorage.setItem("init", "1");
	};

	$scope.setFirstStartBtn = function() {
		$scope.setFirstStart();
		document.location.hash = 'home';
	};

	$scope.saveUserInfos = function() {
		window.localStorage.setItem("name", $scope.username);
		window.localStorage.setItem("telephone", $scope.userphone);
	};

	$scope.saveUserInfosBtn = function() {
		$scope.saveUserInfos();
		$scope.setFirstStart();
		document.location.hash = 'home';
	};

	$scope.sendData = function(formId) {
		var form = document.getElementById(formId);

		$scope.saveUserInfos();

		/*
		 * $.ajax({ type : 'POST', url :
		 * 'http://mtoserver.dyndns.org/mto/formToMail.php', data : $("#" +
		 * formId).serialize(), success : function(data) { alert ("success"); }
		 * });
		 */

		//window.history.go(-1);
		document.location.hash = 'home';
		showAlert("Die Mitarbeiter von MTO melden sich in Kürze", "Info");
	};

	$scope.setNameAndTelephone = function() {
		var name = window.localStorage.getItem("name");
		var phone = window.localStorage.getItem("telephone");

		if (name == 'null' || name == 'undefined'){
			name = '';
		}
		if (phone == 'null' || phone =='undefined'){
			phone = '';
		}
		$scope.username = name;
		$scope.userphone = phone; 
	};

	var init = window.localStorage.getItem("init");

	if (init == 1) {
		document.location.hash = "home";
		$scope.setNameAndTelephone();
	}

	$scope.loadData();
}

function showAlert(message, title) {
	if (navigator.notification) {
		navigator.notification.alert(message, null, title, 'OK');
	} else {
		alert( title ? (title + ": " + message) : message);
	}
}
