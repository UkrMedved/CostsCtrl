app.controller('AddExpenditureCategory', ['$scope', '$uibModalInstance','storageFactory', 'newExpenditureCategoryModel', 
					function($scope, $uibModalInstance, newExpenditureCategoryModel, storageFactory) {

    

    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function() {
		
		console.log($scope.newExpenditureCategoryModel);
		$uibModalInstance.close($scope.newExpenditureCategoryModel);
		
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