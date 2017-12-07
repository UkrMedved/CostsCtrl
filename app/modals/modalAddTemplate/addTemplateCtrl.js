app.controller('addTemplateCosts', function($scope, $uibModalInstance, storageFactory, newTemplateModel) {
					

    

    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function() {
		$uibModalInstance.close($scope.newTemplateModel);
		
	};
	

})