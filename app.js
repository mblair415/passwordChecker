console.log("indexController");
angular.module('angularTest', [])
       .controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController(){
  var vm = this;
  vm.password = {password: ""}

  if (password != passwordConfirm) {
    $( "#passwordConfirm" ).addClass( "invalid" )
  }
}
