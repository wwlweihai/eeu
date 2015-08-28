angular.module('app.controller')
.controller('menu',menu);

menu.$inject = [
    '$ionicPlatform',
    '$ionicPopup',
    'localStorageService',
    '$rootScope',
    '$state',
    '$ionicHistory',
    '$scope'
];
function menu($ionicPlatform,$ionicPopup,localStorageService,$rootScope,$state,$ionicHistory,$scope) {
    activited();
    $scope.signOut = signOut;
    function activited(){
        $rootScope.globals = localStorageService.get('globals') || {};
        if($rootScope.globals.currentUser){
            $scope.isLogin = true;
        }else{
            $scope.isLogin = false;
        };
    };
    function signOut(){
        localStorageService.remove('globals');
        $ionicHistory.clearCache();
        $scope.isLogin = false;
        //$state.go("menu.index");
        alert("登出成功");
    };
    $rootScope.$on('userLogin', function (event, data) {
        console.log("userLogin on " + data); // 'Emit!'
        activited();
    });
    $ionicPlatform.registerBackButtonAction(
        function(){
            var confirmPopup = $ionicPopup.confirm({
                title: '退出程序',
                template: '確認要退出？',
                cancelText:'取消',
                okText: '確認'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    ionic.Platform.exitApp();
                } else {
                    //console.log('You are not sure');
                }
            });
        }, 100);
}


