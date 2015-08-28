angular.module('app.controller')
.controller('newsDetail',newsDetail);

newsDetail.$inject = [
    'Restangular',
    '$stateParams',
    '$scope'
];
function newsDetail(Restangular,$stateParams,$scope) {
    $scope.data = {};
    console.log($stateParams.id);
    var newsDetailReq = Restangular.one("").withHttpConfig({transformRequest: angular.identity});
    var newsDetailReqParams = {task:"get_news"};
    var formData = new FormData();
    formData.append('id', $stateParams.id);
    newsDetailReq.customPOST(
        formData,
        undefined, // put your path here
        newsDetailReqParams, // params here, e.g. {format: "json"}
        {'Content-Type': undefined}
    ).then(function(result){
            console.log(result.data);
            $scope.data.newsDetail = result.data[0];
    });
}


