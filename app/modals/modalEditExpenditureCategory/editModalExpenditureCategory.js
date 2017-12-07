app.controller('EditExpenditureCategory', ['$scope', '$uibModalInstance','storageFactory', function($scope, $uibModalInstance , storageFactory, correctCategory) {
			
    $scope.storageFactory = storageFactory;
    console.log(correctCategory); 
    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function () {
    console.log($scope.storageFactory.ExpenditureCategory[$index]);
    	
	};


	$scope.today = function() {
        $scope.date = new Date();
        
           };
        $scope.today();
  
        $scope.dateOptions = {
        format: 'yy',
       };
 
        $scope.openPicker = function() {
          $scope.popup.opened = true;
        };

        $scope.setDate = function(year, month, day) {
        $scope.date = new Date(year, month, day);
        };
   
        $scope.popup = {
          opened: false
        };

}])