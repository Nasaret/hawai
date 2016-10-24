(function(){
	var app = angular.module('hawai', ['ngRoute']);

	
	app.directive('content', function(){
		return {
			restrict : 'EA',
			name : 'content',
			templateUrl : 'content.html'
		}
	});
	app.controller('homeController' function($scope){
		$scope.block = [{
	titre: "La Mecque des surfeurs",
	texte:"Quel surfeur à la recherche de vagues toujours plus grosses n'a pas rêvé de glisser sur les tubes immaculés et mousseux de la célèbre côte nord d'Hawaii - Waimea Bay... la Sunset Beach... le spot de Banzai Pipeline... Haleiwa - Ce sont quelques unes des destinations de surf qui accueillent des milliers d'amateurs, de pros et d'apprentis pro du monde entier chaque année. Hawaii est la mecque des surfeurs, un endroit où viennent finir leurs courses les plus grandes et les plus propres des vagues.",
	bouton: "View details &raquo;"
},  {
	titre: "Histoire du surf",
	texte: "Les Hawaiiens sont vraiment les réels inventeurs du \"Sport des Rois\", encore appelé \"hee nalu\" en Hawaiien. Après l'arrivée du capitaine anglais Cook sur les îles, le lieutenant James King fut le premier à rapporter comment les Hawaiiens de l'époque s'engageait dans cette activité pour le peu inhabituelle. Le capitaine Cook et d'autres non-hawaiiens découvrant les îles pour la première fois furent impressionnés par l'agilité et la maîtrise de ces \"hommes de l'eau\" hawaiiens. Ceux-ci utilisaient de longues planches découpées dans de long troncs d'arbres pour accrocher et glisser sur les vagues déferlantes, allongés sur leur ventre ou debout un pied devant l'autre.",
	bouton: "View details &raquo;"
},  {
	titre: "Une véritable tradition hawaiienne",
	texte: "La plupart des spots les plus célèbres ont leur petit nom presque toujours indiqués sur une carte. Le plus simple est demander autour de vous où trouver les spots qui correspondront le mieux à vos capacités à un moment donné de l'année. Parmi les spots célèbres sur Oahu on trouve Velzyland, Backyards, Gas Chambers, Backdoor, Pupukea, Log Cabins, Leftovers, Chun's Reef, Laniakea, Silver Channel, Avalanche, Kaena Points et Walls.",
	bouton: "View details &raquo;"
}];

	});
})();


