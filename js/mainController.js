app.controller('mainController',['$scope','$http', '$filter',function($scope,$http,$filter){
    
    $scope.text1Change = false;
    $scope.text2Change = false; 
    
    $http.get('http://api.fixer.io/latest?').then(function(res){
        $scope.rate = res.data.rates;
        $scope.date = res.data.date;
    });
    
    rateSolver = function(c1,c2,convto){
        var temp = c1/c2;
        return (convto*temp);
    };
    
    $scope.converting = function(){
        if ($scope.text1Change){
            
            $scope.convertAmount2 = rateSolver($scope.convertTo,$scope.convert,$scope.convertAmount1); //1-->2
            
            $scope.convertAmount2 = Math.round($scope.convertAmount2*100)/100;
        }
        else if($scope.text2Change){
            $scope.convertAmount1 = rateSolver($scope.convert,$scope.convertTo,$scope.convertAmount2).toFixed(2); //2-->1
        }
    };
    
    $scope.textOneChange = function(){
        $scope.text1Change = true;
        $scope.text2Change = false;
    };
    
    $scope.textTwoChange = function(){
        $scope.text2Change = true;
        $scope.text1Change = false;
    };

}]);