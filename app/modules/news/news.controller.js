angular.module('app.controller')
.controller('news',news);

news.$inject = [
    'Restangular',
    '$stateParams',
    '$scope'
];
function news(Restangular,$stateParams,$scope) {
    $scope.data = {};
    console.log($stateParams.id);
    var newsDetailReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var newsDetailReqParams = {task:"get_news"};
    var formData = new FormData();
    newsDetailReq.customPOST(
        null,
        undefined, // put your path here
        newsDetailReqParams, // params here, e.g. {format: "json"}
        {'Content-Type': undefined}
    ).then(function(result){
            console.log(result.data);
            $scope.data.newsList = result.data;
    });
}


