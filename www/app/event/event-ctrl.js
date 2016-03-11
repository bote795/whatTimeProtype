(function() {

	angular.module('myApp').controller('eventCtrl', 
		[ '$stateParams','eventsSrv', eventCtrl ])
	function eventCtrl($stateParams,eventsSrv){
			var vm =this;
			vm.events =  eventsSrv.get();
			var eventId = Number($stateParams.id);
			vm.event= vm.events[eventId];
	}
})();