(function() {

	angular.module('myApp').controller('eventCtrl',['$state', eventCtrl ])
	function eventCtrl($state){
			var vm =this;
			vm.new = function(){
				console.log("test");
				$state.go("NewEvent");
			}
	}
})();