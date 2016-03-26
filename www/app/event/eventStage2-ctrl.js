(function() {

	angular.module('myApp').controller('eventStage2Ctrl',
		[ '$stateParams','eventsSrv','$state', eventStage2Ctrl ])
	function eventStage2Ctrl($stateParams,eventsSrv,$state){
			var vm =this;
			vm.events =  eventsSrv.get();
			var eventId = Number($stateParams.id);
			vm.event= vm.events[eventId];

			this.addTime = function(time){
				if (time == "") return;
				vm.event.times.push({value: false, 
					title: time, votes: 0})
				vm.time = "";
			}
			this.new = function(){
				vm.event.stage = 2;
				$state.go('tab.events');
			}
	}
})();