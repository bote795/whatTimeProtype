(function() {

	angular.module('myApp').controller('newEventCtrl',[ newEventCtrl ])
	function newEventCtrl(){
			var vm =this;
			vm.friends=[];
			vm.suggestions=[];

			vm.addFriend = function(name) {
				vm.friends.push(name);
				vm.name="";
			}

			vm.addSuggestion = function(suggestion) {
				vm.suggestions.push(suggestion);
				vm.suggestion="";
			}
	}
})();