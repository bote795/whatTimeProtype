(function() {

	angular.module('myApp').service('eventsSrv',[ eventsSrv ])
	function eventsSrv(){
		var self =this;
		self.events = [
		{title: "Winter Break", date: 1288323623006, 
		friends: ["James", "bob"], 
		suggestions: [
	      	{value: false , title: "Movies", votes: 3},
	      	{value: false, title: "Netflix and Chill", votes: 1}
    	] 
        , createdby: "James Oscars"}];
    this.addEvent= function (event){
        self.events.push(event);
    }
	  this.get = function(){
	    return self.events; 
	  }		
	}
})();