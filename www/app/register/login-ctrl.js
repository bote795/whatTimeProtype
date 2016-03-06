(function() {

	angular.module('myApp').controller('loginCtrl',['$state', 
		function($state){
			var vm =this;
			vm.signIn = function(user){
				if (user.username && user.username === "jack" &&
					user.password ==="jack") {
					$state.go("tab.home");
				}
			}
	}])
})();