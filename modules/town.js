//This is the main Object that manage People and ressource.
(function(angular)
{
	'use strict'
	
	angular.module('Town',[])
	.service('Town',function()
	{
		function Town()
		{
			this._cityName = "";
			this.ArrayPopulation; //Array wich contain People Object
		}
	});

})(angular);