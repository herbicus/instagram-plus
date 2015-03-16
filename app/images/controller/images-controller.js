angular.module('imagesModule').controller('imagesController', ['$scope', '$modal', 'imagesService', function($scope, $modal, imagesService) {

  var ctrl = this;

  this.getImagesByTag = function(tag){



    tag = tag || 'atlanta';


    imagesService.getImagesByTag(tag).then(function(results){
      ctrl.igData = results.data;

    }, function(error) {
      console.log('error');
    });

  };

  this.getImagesByTag();

  this.open = function(uri){

    var modalInstance = $modal.open({
      templateUrl: 'app/images/view/images-modal-view.html',
      controller: 'imagesModalController',
      size: 'lg',
      resolve: {
        imageUri: function(){
          console.log(uri);

          return uri;
        }
      }
    });
  };

  $scope.$watch('imagesCtrl.searchInput', function(newVal, oldVal){
    if(newVal !== oldVal) {
      console.log('yo ', newVal);
      ctrl.getImagesByTag(newVal);
    }

  });

}]);
