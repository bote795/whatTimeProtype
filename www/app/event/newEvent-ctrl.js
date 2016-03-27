(function() {

	angular.module('myApp').controller('newEventCtrl',
		['eventsSrv', '$state',newEventCtrl ])
	function newEventCtrl(eventsSrv,$state){
			var vm =this;
			vm.friends=[];
			vm.suggestions=[];

			vm.addFriend = function(name) {
				vm.friends.push(name);
				vm.name="";
			}

			vm.addSuggestion = function(suggestion) {
				vm.suggestions.push({value: false, title: suggestion, votes: 0});
				vm.suggestion="";
			}
			vm.new =function() {
				eventsSrv.addEvent({title: vm.title, date: vm.date,
					createdby: "Adam", friends: vm.friends,
					 suggestions: vm.suggestions ,
					 stage: 1,
					 times: [],
				    	decided: {
				    		suggestion: {},
				    		time: {}
				    	}
					})
				$state.go('tab.events');
			}
	}
})();