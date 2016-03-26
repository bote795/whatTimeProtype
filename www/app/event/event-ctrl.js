(function() {

	angular.module('myApp').controller('eventCtrl', 
		[ '$stateParams','eventsSrv', '$state', eventCtrl ])
	function eventCtrl($stateParams,eventsSrv, $state){
			var vm =this;
			vm.events =  eventsSrv.get();
			vm.eventId = Number($stateParams.id);
			vm.event= vm.events[vm.eventId];
			this.selectedEvent = function(){
				//use filter to find all event.suggestions with value true
				selected= vm.event.suggestions.filter(isChecked);
				console.log(selected);
				if (selected.length > 1) {
					console.log("Error you can only select one")
				}
				else
				{
					vm.event.decided.suggestion = selected[0].title;
					vm.planTime();
				}
			}
			this.planTime=  function (){
				$state.go("tab.stage2",{id: vm.eventId});
			}
			function isChecked(suggestion) {
				if(suggestion.value)
				{
					return suggestion;
				}
			}
	}
})();