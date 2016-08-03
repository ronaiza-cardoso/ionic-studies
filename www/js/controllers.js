angular.module('starter')
    .controller('ListagemController', function($scope){

        $scope.listaDeProdutos = [
            {"nome" : "Banana", "preco" : 2},
            {"nome" : "Maça", "preco" : 1},
            {"nome" : "Toddy", "preco" : 7},
            {"nome" : "Arroz", "preco" : 15},
            {"nome" : "Macarrão", "preco" : 4}
        ];
    });

angular.module('starter').controller('ProdutoEscolhidoController', function($scope, $stateParams) {

    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
    $scope.produtoEscolhido = angular.fromJson($stateParams.produto);


    $scope.acessorios = [
        {"nome": "Freio ABS", "preco": 500},
        {"nome": "Ar Cond.", "preco": 1000},
        {"nome": "MP3", "preco": 800}];

    $scope.mudou = function(acessorio, isMarcado) {

        if (isMarcado) {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        } else {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }
    };

});