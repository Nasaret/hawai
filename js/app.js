(function(){
	var app = angular.module('hawai', ['ngRoute']);

	/*app.controller('homeController' function($scope){
		$scope.
	});*/

	app.directive('content', function(){
		return {
			restrict : 'EA',
			name : 'content',
			templateUrl : 'content.html'
		}
	});
})();