(function(){
  var app = angular.module('hawai', []);

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
})();
