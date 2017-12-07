app.controller('editTemplateCtrl', function($scope, $uibModalInstance, storageFactory) {
					

    

    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function() {
		$uibModalInstance.close();
		
	};
	

})