angular.module('starter')
.controller('ListagemController', function($scope){

	$scope.listaDeProdutos =  ["Banana", "Maça", "Toddy", "Leite Condensado", "Arroz"];

});

angular.module('starter')
	.controller('ProdutoEscolhidoController', function($scope, $stateParams) {
	
	$scope.produtoEscolhido = $stateParams.produto;
	
});