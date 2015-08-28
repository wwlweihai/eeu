angular.module('app.controller')
.controller('index',index);

index.$inject = [
    '$ionicSlideBoxDelegate',
    'Restangular',
    '$scope'
];
function index($ionicSlideBoxDelegate,Restangular,$scope) {
    var bannerReq = Restangular.one("");
    var bannerReqParams = {task:"get_banner"};

    bannerReq.get(bannerReqParams).then(function(result){
        $scope.bannerList = result.data;
        console.log(result.data);
        $ionicSlideBoxDelegate.update();
    });

    var newsReq = Restangular.one("");
    var newsReqParams = {task:"get_news"};

    newsReq.get(newsReqParams).then(function(result){
        console.log(result.data);
        $scope.newsList = result.data;
    });
};


