(function() {

	angular.module('myApp').controller('invitationCtrl',
		['eventsSrv','$state', invitationCtrl ])
	function invitationCtrl(eventsSrv,$state){
			var vm =this;
			vm.events =  eventsSrv.get();
			vm.selectEvent = function(id){
				$state.go('tab.invitationsStateOne',{id: id});
			}
	}
})();