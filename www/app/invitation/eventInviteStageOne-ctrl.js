(function() {

	angular.module('myApp').controller('eventInviteStageOneCtrl',
		[ '$stateParams', 'eventsSrv', eventInviteStageOneCtrl ])
	function eventInviteStageOneCtrl($stateParams,eventsSrv){
			var vm =this;
			vm.events =  eventsSrv.get();
			var eventId = Number($stateParams.id);
			vm.event = vm.events[eventId];
			 vm.vote = function(suggest){
			    if(suggest.value)
			      {
			        suggest.votes++;   
			      }
			    else
			      {suggest.votes--;}
			    
			  }

	}
})();