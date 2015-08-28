angular.module('app.controller')
.controller('info',info);

info.$inject = [
    '$rootScope',
    '$state',
    'localStorageService',
    'Restangular',
    '$scope'
];
function info($rootScope,$state,localStorageService,Restangular,$scope) {
    $rootScope.globals = localStorageService.get('globals') || {};
    console.log('currentUser' + $rootScope.globals.currentUser.id);
    if(!$rootScope.globals.currentUser){
        $state.go('menu.signIn');
    }else{
        var infoReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
        var infoReqParams = {task:"get_user_info"};
        var formData = new FormData();
        formData.append('id',  $rootScope.globals.currentUser.id);
        infoReq.customPOST(
            formData,
            undefined, // put your path here
            infoReqParams, // params here, e.g. {format: "json"}
            {'Content-Type': undefined}
        ).then(function(result){
                console.log("info -- " + JSON.stringify(result));
                if(result.succeed === 1){
                    $scope.user = result.data;
                }else{
                    alert("獲取信息失敗");
                }
        });
    }
};


