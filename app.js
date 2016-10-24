(function(){
  var app = angular.module('hawai', ["ngRoute"]);

  app.controller('produitController', function(){
  this.produit = dataProduit;
})

var dataProduit = [{
 photoProduit : "https://pixabay.com/en/surfboard-beach-sand-ocean-sea-690904/",
 textProduit : "Planche discount",
 descriptifProduit : "Planche à peine usée",
 prixProduit : "100"
},{
  photoProduit = "https://pixabay.com/en/surfboards-beach-manly-vacation-320077/",
  textProduit = "Lot de planche",
  descriptifProduit : "Un lot de planche pour toute une vie",
  prixProduit : "1000"
},{
  photoProduit = "https://pixabay.com/en/corralejo-fuerteventura-1155451/",
  textProduit = "Planche titane",
  descriptifProduit : "Une planche indescrutible, et vous ?",
  prixProduit : "2000"
},{
  photoProduit = "https://pixabay.com/en/surfing-surf-board-ocean-pacific-969476/",
  textProduit = "Planche XL",
  descriptifProduit : "Plus gros que la vague",
  prixProduit : "500"
}];
})();
