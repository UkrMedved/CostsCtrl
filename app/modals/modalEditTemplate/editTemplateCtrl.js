app.controller('editTemplateCtrl', function($scope, $uibModalInstance, storageFactory,correctTemplate) {
	console.log(correctTemplate);
	$scope.storageFactory = storageFactory;
	$scope.correctTemplate = correctTemplate;
    

    $scope.cancel = function() {
		$uibModalInstance.close();

	};

	$scope.ok = function() {

		$uibModalInstance.close(correctTemplate);
		
	};
	

})