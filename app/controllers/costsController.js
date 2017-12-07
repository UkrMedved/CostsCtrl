    app.controller('CostsController', function($uibModal, $log, $document, $scope, storageFactory) {
        $scope.storageFactory = storageFactory;
        $scope.costsModel = {
          who: '',
          from: '',
          to: '',
          sum: 1,
          date: '',
          comment:''
        };

        $scope.ExpenditureCategoryModel = {
          title: '',
          limitPayment:0,
          regularPayment: false,
          sumPayment : 0 , 
          refillRate: '',
          datePayment: '',
          income : ''
        }

        $scope.templateModel = {
          title: '',
          who: '',
          from: '',
          to: '',
          sum: 0,
          date: '',
          comment:'',
        }

        //независимые копии моделей 
        $scope.newCosts = angular.extend( {}, $scope.costsModel);   
        $scope.newExpenditureCategoryModel = angular.extend( {}, $scope.ExpenditureCategoryModel); 
        $scope.newTemplateModel = angular.extend( {}, $scope.templateModel); 

       // добавление даты и календаря в инпут 
        $scope.today = function() {
        $scope.newCosts.date = new Date();
        
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


        

        $scope.addNewCosts = function () {
          storageFactory.allCosts.push($scope.newCosts);
          $scope.newCosts = angular.extend( {}, $scope.costsModel);
          $scope.today();
          
        }; 

        $scope.addTemplateCosts = function () {
          var modalAddTemplate = $uibModal.open({
            templateUrl: 'app/modals/modalAddTemplate/template.html',
            controller: 'addTemplateCosts',
            size: 'lg',
            resolve: {
              newTemplateModel : function () {
                return $scope.newTemplateModel;
              }
            },
          });
            modalAddTemplate.result.then(function(result){
            storageFactory.templateCosts.push(result);
            $scope.newTemplateModel = angular.extend( {}, $scope.templateModel); 
          });
        };
          // создания модального окна на добавления категории расходов
        $scope.addExpenditureCategory = function () {
          var modalExpenditureCategory = $uibModal.open({
            templateUrl: 'app/modals/modaExpenditureCategory/template.html',
            controller:  'AddExpenditureCategory' ,
            size: 'lg',
            resolve: {
              newExpenditureCategoryModel : function () {
                return  $scope.newExpenditureCategoryModel;
              }
            },  
          });
           modalExpenditureCategory.result.then(function(result){
            
            storageFactory.ExpenditureCategory.push(result)
            
            $scope.newExpenditureCategoryModel = angular.extend( {}, $scope.ExpenditureCategoryModel);
          });
        };


        $scope.addCostsTemplate = function ($index) {
           $scope.newCosts = angular.extend( {}, storageFactory.templateCosts[$index] );
           $scope.newCosts.date = new Date();
           storageFactory.allCosts.push($scope.newCosts);
           $scope.newCosts = angular.extend( {}, $scope.costsModel);
           
        };
          
        // создания модального окна для удаления расходов
        $scope.deleteCosts = function($index){
            var modalDelete = $uibModal.open({
              templateUrl: 'app/modals/modalDelete/templateDelete.html',
              controller:'ModalController',
              size:'md'
            });
            modalDelete.result.then(function(result){
              console.log('result', result);
              if(result) 
                storageFactory.allCosts.splice( $index, 1);
                
            });

          };
          $scope.deleteTemplate = function($index){
            var modalDelteTemplate = $uibModal.open({
              templateUrl: 'app/modals/modalDeleteTemplate/templateDelete.html',
              controller: 'deleteTemplate', 
              size: 'md'
            });
            modalDelteTemplate.result.then(function(result){
              if(result)
                storageFactory.templateCosts.splice($index,1);
            });
          };
          //создание модального окна удаления категории расходов
          $scope.deleteExpenditureCategory = function($index){
            var modalDeleteCategory = $uibModal.open({
              templateUrl: 'app/modals/modalDeleteExpenditureCategory/templateDelete.html',
              controller: 'modalDeleteExpenditureCategory',
              size: 'md'
            });
            modalDeleteCategory.result.then(function(result){
              if(result)
                storageFactory.ExpenditureCategory.splice($index,1);
               
             });
          };

         
        // создание модального окна на редактирование категории расхода
        $scope.editExpenditureCategory = function ($index) {
          var modalEditExpenditureCategory = $uibModal.open({
              templateUrl: 'app/modals/modalEditExpenditureCategory/template.html' ,
              controller: 'EditExpenditureCategory' ,
              size: 'lg',
              resolve: {
                correctCategory: function () {
                  return storageFactory.ExpenditureCategory[$index];
                }
              },
          });
            modalEditExpenditureCategory.result.then(function(result){

            });
        };

        $scope.editTemplate = function () {
          var modalEditTemplate = $uibModal.open ({
            templateUrl: 'app/modals/modalEditTemplate/template.html',
            controller: 'editTemplateCtrl',
            size: 'lg'
          }); 
        };


});