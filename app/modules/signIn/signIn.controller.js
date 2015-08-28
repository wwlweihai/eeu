angular.module('app.controller')
.controller('signIn',signIn);

signIn.$inject = [
    '$rootScope',
    'localStorageService',
    'Restangular',
    '$state',
    '$ionicHistory',
    '$scope'
];
function signIn($rootScope,localStorageService,Restangular,$state,$ionicHistory,$scope) {
    var signInReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var signInReqParams = {task:"login"};
    $scope.form = {};
    $scope.signIn = signIn;
    //$scope.goBack = goBack;
    function signIn(){
        //signInReq.post("",
        //    {tel:$scope.form.tel,password:$scope.form.pwd},signInReqParams)
        //    .then(function(result) {
        //    console.log(result);
        //});
        var formData = new FormData();
        formData.append('tel', $scope.form.tel);
        formData.append('password', $scope.form.pwd);
        signInReq.customPOST(
            formData,
            undefined, // put your path here
            signInReqParams, // params here, e.g. {format: "json"}
            {'Content-Type': undefined}
        ).then(function(result){
                console.log(result);
                if(result){
                    if(result.succeed === 1){
                        alert("登錄成功");
                        $ionicHistory.clearCache();
                        $rootScope.globals = {
                            currentUser: {
                                id:result.data.id,
                                name:result.data.name,
                                tel:result.data.tel,
                                email:result.data.email
                            }
                        };
                        //console.log($rootScope.globals);
                        localStorageService.set('globals', $rootScope.globals);
                        $scope.form.tel = "";
                        $scope.form.pwd = "";
                        $state.go("menu.index");
                        $rootScope.$broadcast('userLogin', 'userLogin');
                    }else{
                        $scope.form.pwd = "";
                        alert(result.errormsg);
                    }
                }

        });
    }
    //function goBack(){
    //}
}


