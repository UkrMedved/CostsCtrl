app.controller('editTemplateCtrl', function($scope, $uibModalInstance, storageFactory,correctTemplate) {
	console.log('new', correctTemplate);
	$scope.storageFactory = storageFactory;
	$scope.correctTemplate = correctTemplate;
    

    $scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');

	};

	$scope.ok = function() {

		$uibModalInstance.close(correctTemplate);
		
	};
	

})