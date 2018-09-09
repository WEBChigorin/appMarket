
app.controller('MainController', ['$scope', function($scope){
    $scope.move = {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };
    $scope.shutterbug = {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbug',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/gameboard.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };
}]);