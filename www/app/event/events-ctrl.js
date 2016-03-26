(function() {

	angular.module('myApp').controller('eventsCtrl',
		['$state', 'eventsSrv', eventsCtrl]);
	function eventsCtrl($state,eventsSrv){
			var vm =this;
			vm.events =  eventsSrv.get();
			vm.new = function(){
				$state.go("tab.newEvent");
			}
			vm.selectEvent= function(id){
				if (vm.events[id].stage ==1) {
					$state.go('tab.event',{id: id});
				}
				else
				{
					$state.go('tab.eventS2',{id: id})
				}
			}
	}
})();