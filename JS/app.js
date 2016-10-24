(function(){
	var app = angular.module('hawai', ['ngRoute']);
		app.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'partials/home/home.html'
			})
			.when('/home', {
				templateUrl: 'partials/home/home.html',
				controller: ''
			})
			.when('/produit', {
				templateUrl: 'partials/produit/produit.html',
				controller: 'produitController'
			})
			.when('/contact', {
				templateUrl: 'partials/contact/contact.html',
				controller: ''
			})
		}]);
	app.directive('tete', function(){
		return {
			restrict:'AE',
			templateUrl:"partials/common/header.html"
		}
	});
	app.directive('pied', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/common/footer.html'
		}
	});
	app.directive('home', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/home/home.html'
		}
	});
	app.directive('produit', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/produit/produit.html'
		}
	});
	app.directive('contact', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/contact/contact.html'
		}

	});
	
	  app.controller('produitController', function(){
	    this.produit = dataProduit;
	  })

	  var dataProduit = [{
	    photoProduit : "images/planche.jpg",
	   textProduit : "Planche discount",
	   descriptifProduit : "Planche à peine usée",
	   prixProduit : "100"
	 },{
	  photoProduit : "images/bcpplanche.jpg",
	  textProduit : "Lot de planche",
	  descriptifProduit : "Un lot de planche pour toute une vie",
	  prixProduit : "1000"
	},{
	  photoProduit : "images/requin.jpg",
	  textProduit : "Planche titane",
	  descriptifProduit : "Une planche indescrutible, et vous ?",
	  prixProduit : "2000"
	},{
	  photoProduit : "images/fille.jpg",
	  textProduit : "Planche XL",
	  descriptifProduit : "Plus gros que la vague",
	  prixProduit : "500"
	}];

})()