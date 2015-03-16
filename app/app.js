angular.module('instagramPlus', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'imagesModule']);

angular.module('instagramPlus').config(function ($stateProvider, $urlRouterProvider) {



  /* Add New States Above */
  $urlRouterProvider.otherwise('/images');

});

angular.module('instagramPlus').value('clientId', '2122e774bdd44005ba53fb84478e67d6');

angular.module('instagramPlus').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
