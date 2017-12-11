app.controller('AddExpenditureCategory', ['$scope', '$uibModalInstance','storageFactory', 'newExpenditureCategoryModel', 
					function($scope, $uibModalInstance,storageFactory, newExpenditureCategoryModel ) {

    $scope.newExpenditureCategoryModel =newExpenditureCategoryModel;
    $scope.storageFactory = storageFactory;   
    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function() {
		
		console.log($scope.newExpenditureCategoryModel);
		$uibModalInstance.close($scope.newExpenditureCategoryModel);
		
	};
	$scope.today = function() {
        newExpenditureCategoryModel.datePayment = new Date();
        
           };
        $scope.today();
  
        $scope.dateOptions = {
        format: 'yy',
       };
 
        $scope.openPicker = function() {
          $scope.popup.opened = true;
        };

        $scope.setDate = function(year, month, day) {
        newExpenditureCategoryModel.datePayment = new Date(year, month, day);
        };
   
        $scope.popup = {
          opened: false
        };

}])