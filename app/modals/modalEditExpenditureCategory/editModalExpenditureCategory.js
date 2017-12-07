app.controller('EditExpenditureCategory', ['$scope', '$uibModalInstance','correctCategory','storageFactory', function($scope, $uibModalInstance , correctCategory, storageFactory) {
      
    $scope.storageFactory = storageFactory;
    console.log('correctCategory :',correctCategory); 
    
    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function () {
    console.log(correctCategory);
    $uibModalInstance.close();
    	
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